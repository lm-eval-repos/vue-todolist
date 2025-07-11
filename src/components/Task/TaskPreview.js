import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faEdit, 
  faTrash 
} from '@fortawesome/free-solid-svg-icons';
import { useTaskStore } from '../../store/taskStore';
import UIButton from '../UI/UIButton';
import UIModal from '../UI/UIModal';
import TaskEdit from './TaskEdit';

const TaskPreview = ({ taskItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { removeTask, updateTask } = useTaskStore();

  const changeTaskDone = (task) => {
    const updatedTask = {
      ...task,
      status: {
        ...task.status,
        done: !task.status.done
      }
    };
    updateTask(updatedTask);
  };

  const showTask = () => {
    setIsModalOpen(true);
  };

  const hideTask = () => {
    setIsModalOpen(false);
  };

  const handleRemoveTask = () => {
    removeTask(taskItem.id);
  };

  const handleEditTask = () => {
    hideTask();
  };

  return (
    <div
      className={`task-preview ${
        taskItem.status.done ? 'is-done' : ''
      } ${
        isModalOpen ? 'is-show' : ''
      }`}
    >
      <UIButton
        className="task-preview__button-done button--icon"
        onClick={() => changeTaskDone(taskItem)}
      >
        <span className="button__icon">
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
      </UIButton>
      
      <div className="task-preview__name">
        <p>{taskItem.name}</p>
      </div>
      
      <ul className="task-preview__tools">
        <li>
          <UIButton
            className="task-preview__button-edit button--icon"
            onClick={showTask}
          >
            <span className="button__icon">
              <FontAwesomeIcon icon={faEdit} />
            </span>
          </UIButton>
        </li>
        <li>
          <UIButton
            className="task-preview__button-remove button--icon"
            onClick={handleRemoveTask}
          >
            <span className="button__icon">
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </UIButton>
        </li>
      </ul>
      
      <UIModal
        isOpen={isModalOpen}
        onClose={hideTask}
        title="Edit Task"
      >
        <TaskEdit
          task={taskItem}
          onEditTask={handleEditTask}
        />
      </UIModal>
    </div>
  );
};

export default TaskPreview;