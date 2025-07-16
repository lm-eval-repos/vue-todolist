import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import UIButton from './UIButton';
import './UIModal.scss';

const UIModal = ({ className = '', onClose, children, modalButtonOpen, modalInner }) => {
  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`modal ${className}`}>
      {modalButtonOpen}
      <div className="modal__overlay">
        <div className="modal__box">
          <UIButton
            className="modal__button-close button--line-black button--small"
            onClick={handleCloseModal}
          >
            <span className="button__icon">
              <i className="icon">
                <FontAwesomeIcon icon={faTimes} />
              </i>
            </span>
          </UIButton>
          {modalInner}
        </div>
      </div>
    </div>
  );
};

export default UIModal;
