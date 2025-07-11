import React from 'react';

const UIModal = ({ 
  isOpen, 
  onClose, 
  children, 
  title = '',
  className = '' 
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal ${className}`} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="modal__header">
            <h3 className="modal__title">{title}</h3>
            <button className="modal__close" onClick={onClose}>
              ×
            </button>
          </div>
        )}
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default UIModal;