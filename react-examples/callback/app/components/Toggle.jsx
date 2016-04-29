import React from 'react';

const Toggle = ({toggle, text}) => (
  <button className='toggle' onClick={toggle}>{text}</button>
);

export default Toggle;