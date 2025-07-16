import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useTask } from '../../context/TaskContext';
import UIButton from '../UI/UIButton';
import UIModal from '../UI/UIModal';
import TaskEdit from './TaskEdit';
import './TaskPreview.scss';

const TaskPreview = ({ taskItem }) => {
  const { actions } = useTask();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeTaskDone = (task) => {
    const updatedTask = {
      ...task,
      status: {
        ...task.status,
        done: !task.status.done
      }
    };
    actions.updateTask(updatedTask);
  };

  const showTask = () => {
    setIsModalOpen(true);
  };

  const hideTask = () => {
    setIsModalOpen(false);
  };

  const handleRemoveTask = () => {
    actions.removeTask(taskItem.id);
  };

  const modalButtonOpen = (
    <UIButton
      className="task-preview__button-edit button--icon"
      onClick={showTask}
    >
      <span className="button__icon">
        <i className="icon">
          <FontAwesomeIcon icon={faEdit} />
        </i>
      </span>
    </UIButton>
  );

  const modalInner = (
    <TaskEdit
      task={taskItem}
      onEditTask={hideTask}
    />
  );

  return (
    <div
      className={`task-preview ${taskItem.status.done ? 'is-done' : ''} ${taskItem.status.show ? 'is-show' : ''}`}
    >
      <UIButton
        className="task-preview__button-done button--icon"
        onClick={() => changeTaskDone(taskItem)}
      >
        <span className="button__icon">
          <i className="icon">
            <FontAwesomeIcon icon={faCheckCircle} />
          </i>
        </span>
      </UIButton>
      <div className="task-preview__name">
        <p>
          {taskItem.name}
        </p>
      </div>
      <ul className="task-preview__tools">
        <li>
          <UIModal
            className={isModalOpen ? 'is-open' : ''}
            onClose={hideTask}
            modalButtonOpen={modalButtonOpen}
            modalInner={modalInner}
          />
        </li>
        <li>
          <UIButton
            className="task-preview__button-remove button--icon"
            onClick={handleRemoveTask}
          >
            <span className="button__icon">
              <i className="icon">
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </span>
          </UIButton>
        </li>
      </ul>
    </div>
  );
};

export default TaskPreview;
