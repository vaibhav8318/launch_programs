import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import './launch.scss';

const Launch = ({ launch }) => (
  <div className="display_flex launch_item">
    <div className="picture">
      <img src={isMobile ? launch.links.mission_patch_small : launch.links.mission_patch} />
    </div>
    <div className="detail">
      <h4>
        {launch.mission_name} #{launch.flight_number}
      </h4>
      <span>Mission ids: {launch.mission_id.map((id, index) => {
        if (index === launch.mission_id.length - 1) {
          return id;
        }
        return `${id}, `;
      })}</span>
      <span>Launch Year: {launch.launch_year}</span>
      <span>Successful Launch: {launch.launch_success ? 'true' : 'false'}</span>
      <span>Successful Landing: {launch.landing ? 'true' : 'false'}</span>
    </div>
  </div>
);

Launch.propTypes = {
  launch: PropTypes.object.isRequired,
};

export default Launch;
