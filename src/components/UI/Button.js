import React from 'react';
import './style.scss';

const Button = ({ children, color, ...props }) => {
  return (
    <button className={`custom-button ${color}-button`} {...props}>
      {children}
    </button>
  );
};

export default Button;
