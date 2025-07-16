import React from 'react';
// import { iconMap } from '../../assets/images/icons/icons-list.js';
import './UIIcon.scss';

const UIIcon = ({ name }) => {
  // Temporary placeholder for SVG icons
  if (name === 'emptyTasks') {
    return (
      <i className="icon">
        <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#ccc',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          color: '#666'
        }}>
          📝
        </div>
      </i>
    );
  }

  return (
    <i className="icon">
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc',
        borderRadius: '4px'
      }} />
    </i>
  );
};

export default UIIcon;
