import React from 'react';
import { iconMap } from '../../assets/images/icons/icons-list.js';

const UIIcon = ({ name }) => {
  const iconId = iconMap[name];
  
  if (!iconId) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return null;
  }

  return (
    <i className={`icon ${iconId}`}>
      <svg className="icon__svg">
        <use className="icon__use" href={`#${iconId}`} />
      </svg>
    </i>
  );
};

export default UIIcon;