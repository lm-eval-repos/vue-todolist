import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faInfo } from '@fortawesome/free-solid-svg-icons';
import UIButton from './UIButton';
import './UIMessage.scss';

const UIMessage = ({ children }) => {
  const [isClose, setIsClose] = useState(false);

  const openMessage = () => {
    setIsClose(false);
  };

  const closeMessage = () => {
    setIsClose(true);
  };

  return (
    <div className={`message ${isClose ? 'is-close' : ''}`}>
      <div className="message__inner">
        <div className="message__content">
          {children}
        </div>
        {!isClose ? (
          <UIButton
            className="message__button button--bg-black button--icon"
            onClick={closeMessage}
          >
            <span className="button__icon">
              <i className="icon">
                <FontAwesomeIcon icon={faTimes} />
              </i>
            </span>
          </UIButton>
        ) : (
          <UIButton
            className="message__button button--bg-black button--icon"
            onClick={openMessage}
          >
            <span className="button__icon">
              <i className="icon">
                <FontAwesomeIcon icon={faInfo} />
              </i>
            </span>
          </UIButton>
        )}
      </div>
    </div>
  );
};

export default UIMessage;
