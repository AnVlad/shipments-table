import React from 'react';

import './style.scss';

const Input = ({ name, value, setValue, className }) => {
  return (
    <div className={`custom-input ${className}`}>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        value={value}
        onChange={(event) =>
          setValue((prevValue) => {
            return { ...prevValue, [name]: event.target.value };
          })
        }
        type='text'
      />
    </div>
  );
};

export default Input;
