import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useTask } from '../../context/TaskContext';
import UIButton from '../UI/UIButton';
import UITag from '../UI/UITag';
import './DashboardInfo.scss';

const DashboardInfo = () => {
  const { getters, actions } = useTask();
  
  const totalTaskList = getters.getTotalTaskList();
  const totalTaskListDone = getters.getTotalTaskListDone();

  return (
    <div className="dashboard-info">
      <ul className="dashboard-info__list">
        <li className="dashboard-info__item">
          <UITag
            tagName="Tasks"
            tagValue={totalTaskList}
          />
        </li>
        <li className="dashboard-info__item">
          <UITag
            tagName="Tasks Done"
            tagValue={totalTaskListDone}
          />
        </li>
      </ul>
      <ul className="dashboard-info__list">
        {totalTaskListDone !== 0 && (
          <li className="dashboard-info__item">
            <UIButton
              className="button--bg-color-error button--small"
              onClick={actions.removeTaskListDone}
            >
              <span className="button__icon">
                <i className="icon">
                  <FontAwesomeIcon icon={faTrash} />
                </i>
              </span>
              <span className="button__text">
                tasks done
              </span>
            </UIButton>
          </li>
        )}
        <li className="dashboard-info__item">
          <UIButton
            className="button--bg-color-error button--small"
            onClick={actions.removeTaskList}
          >
            <span className="button__icon">
              <i className="icon">
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </span>
            <span className="button__text">
              tasks
            </span>
          </UIButton>
        </li>
      </ul>
    </div>
  );
};

export default DashboardInfo;
