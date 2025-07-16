import React from 'react';
import './UIButton.scss';

const UIButton = ({ 
  buttonHref = null, 
  buttonTo = null, 
  buttonValue = null, 
  className = '', 
  onClick, 
  children 
}) => {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  const getTag = () => {
    if (buttonHref) {
      return 'a';
    } else if (buttonValue) {
      return 'input';
    } else if (buttonTo) {
      // For router-link equivalent, we'll use a regular button for now
      return 'button';
    }
    return 'button';
  };

  const Tag = getTag();
  const props = {
    className: `button ${className}`,
    onClick: handleClick
  };

  if (buttonHref) {
    props.href = buttonHref;
  }
  if (buttonValue) {
    props.value = buttonValue;
  }
  if (buttonTo) {
    props['data-to'] = buttonTo;
  }

  return (
    <Tag {...props}>
      {children}
    </Tag>
  );
};

export default UIButton;
