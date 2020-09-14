import React from 'react';
import PropTypes from 'prop-types';
import './filterButton.scss';

const FilterButton = ({
  children,
  className,
  isSelected,
  onClick
}) => (
  <div
    className={`filter ${isSelected ? 'selected_filter' : 'normal_filter'} mb_10 ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);

FilterButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default FilterButton;
