import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Filters from 'components/Filters';
import Launch from 'components/Launch';
import Loading from 'components/Loading';
import { fetchLaunchesListApi } from 'api/launches';
import './style.scss';

class LandingPage extends React.Component {
  static fetching() {
    return [fetchLaunchesListApi({ limit: 100 })];
  }

  render() {
    return (
      <div className="container">
        <header>
          <h2>
            SpaceX Launch Programs
          </h2>
        </header>
        <div className="display_flex launch_list_page">
          <div className="filter_section">
            <Filters />
          </div>
          <div className="list_section display_flex">
            {
              this.props.launches.isFetching ? <Loading />
                : this.props.launches.list.length === 0 ? <div>No Records Found</div> : (<>
                {this.props.launches.list.map(
                  (launch, index) => <Launch key={index} launch={launch} />
                )}
                </>)
            }
          </div>
        </div>
        <footer className="text_center">
          <h3>
            Developed by: Vaibhav Singh
          </h3>
        </footer>
      </div>
    );
  }
}

LandingPage.propTypes = {
  history: PropTypes.object.isRequired,
  launches: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ launches: state.launches });

const withConnect = connect(mapStateToProps);

export default compose(
  withRouter,
  withConnect,
)(LandingPage);
