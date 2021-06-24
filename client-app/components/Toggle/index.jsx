import PropTypes from 'prop-types';
import React from 'react';

import './Toggle.css';

const Toggle = (props) => {
  const {
    className,
    handleChange,
    options,
  } = props;

  return (
    <div className={`${className}__switch__container`}>
      <p>{options[0]}</p>
      <label className={`${className}__switch`}>
        <input type='checkbox' onChange={handleChange} value={false}/>
        <span className={`${className}__slider round`}></span>
      </label>
      <p>{options[1]}</p>
  </div>
  );
};

Toggle.defaultProps = {
  className: 'toggle',
  options: ['this', 'that'],
};

Toggle.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Toggle;