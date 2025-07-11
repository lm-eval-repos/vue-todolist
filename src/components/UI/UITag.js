import React from 'react';

const UITag = ({ children, className = '' }) => {
  return (
    <span className={`tag ${className}`}>
      {children}
    </span>
  );
};

export default UITag;