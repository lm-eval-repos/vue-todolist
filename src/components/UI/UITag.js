import React from 'react';
import './UITag.scss';

const UITag = ({ tagName, tagValue }) => {
  return (
    <div 
      className={`tag ${typeof tagValue === 'number' ? 'tag--value-number' : ''}`}
    >
      <span className="tag__name">
        {tagName}
      </span>
      <span className="tag__value">
        {tagValue}
      </span>
    </div>
  );
};

export default UITag;
