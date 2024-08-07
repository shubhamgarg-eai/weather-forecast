import React from 'react';

const Input = ({ value, onChange, placeholder, type = 'text' }) => (
  <input value={value} onChange={onChange} placeholder={placeholder} type={type} />
);

export default Input;
