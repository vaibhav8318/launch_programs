import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import queryString from 'query-string';
import { getLaunchesStart } from 'redux/actions/launches';
import FilterButton from '../FilterButton';
import './filters.scss';

const Filters = ({ history, fetchLaunches }) => {
  const [state, setState] = useState({
    limit: 100,
    launch_success: undefined,
    land_success: undefined,
    launch_year: undefined,
  });

  useEffect(() => {
    history.push(`?${queryString.stringify(state)}`);
    fetchLaunches(state);
  }, [state]);

  const clickFilter = (key, value) => () => {
    if (state[key] === value) {
      setState({ ...state, [key]: undefined });
    } else {
      setState({ ...state, [key]: value });
    }
  };

  return (<>
    <h4 className="full_width">Filters</h4>
    <div>
      <h5 className="full_width text_center mt_10">
        <u>Launch Year</u>
      </h5>
      <div className="display_flex button_container">
        <FilterButton
          onClick={clickFilter('launch_year', '2006')}
          isSelected={state.launch_year === '2006'}
        >
          2006
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_year', '2007')}
          isSelected={state.launch_year === '2007'}
        >
          2007
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_year', '2008')}
          isSelected={state.launch_year === '2008'}
        >
          2008
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_year', '2009')}
          isSelected={state.launch_year === '2009'}
        >
          2009
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_year', '2010')}
          isSelected={state.launch_year === '2010'}
        >
          2010
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_year', '2011')}
          isSelected={state.launch_year === '2011'}
        >
          2011
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_year', '2012')}
          isSelected={state.launch_year === '2012'}
        >
          2012
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_year', '2013')}
          isSelected={state.launch_year === '2013'}
        >
          2013
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_year', '2014')}
          isSelected={state.launch_year === '2014'}
        >
          2014
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_year', '2015')}
          isSelected={state.launch_year === '2015'}
        >
          2015
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_year', '2016')}
          isSelected={state.launch_year === '2016'}
        >
          2016
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_year', '2017')}
          isSelected={state.launch_year === '2017'}
        >
          2017
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_year', '2018')}
          isSelected={state.launch_year === '2018'}
        >
          2018
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_year', '2019')}
          isSelected={state.launch_year === '2019'}
        >
          2019
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_year', '2020')}
          isSelected={state.launch_year === '2020'}
        >
          2020
        </FilterButton>
      </div>
      <h5 className="full_width text_center mt_10">
        <u>Successful Launch</u>
      </h5>
      <div className="display_flex button_container">
        <FilterButton
          onClick={clickFilter('launch_success', true)}
          isSelected={state.launch_success === true}
        >
          True
        </FilterButton>
        <FilterButton
          onClick={clickFilter('launch_success', false)}
          isSelected={state.launch_success === false}
        >
          False
        </FilterButton>
      </div>
      <h5 className="full_width text_center mt_10">
        <u>Successful Landing</u>
      </h5>
      <div className="display_flex button_container">
        <FilterButton
          onClick={clickFilter('land_success', true)}
          isSelected={state.land_success === true}
        >
          True
        </FilterButton>
        <FilterButton
          onClick={clickFilter('land_success', false)}
          isSelected={state.land_success === false}
        >
          False
        </FilterButton>
      </div>
    </div>
  </>);
};

Filters.propTypes = {
  history: PropTypes.object.isRequired,
  fetchLaunches: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchLaunches: (data) => dispatch(getLaunchesStart(data)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withRouter,
  withConnect,
)(Filters);
