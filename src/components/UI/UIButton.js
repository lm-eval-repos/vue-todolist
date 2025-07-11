import React from 'react';

const UIButton = ({ 
  children, 
  className = '', 
  onClick, 
  type = 'button',
  disabled = false 
}) => {
  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default UIButton;