import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useTask } from '../../context/TaskContext';
import UIButton from '../UI/UIButton';
import './TaskNew.scss';

const TaskNew = ({ onAddTask }) => {
  const { getters, actions } = useTask();
  const [taskName, setTaskName] = useState('');

  const createTaskId = () => {
    const lastTask = getters.getTaskLast();
    if (lastTask) {
      return lastTask.id + 1;
    }
    return 1;
  };

  const createTaskName = () => {
    return taskName.trim();
  };

  const cleanTaskNew = () => {
    setTaskName('');
  };

  const createTaskNew = () => {
    const taskId = createTaskId();
    const trimmedTaskName = createTaskName();

    const task = {
      id: taskId,
      name: trimmedTaskName
    };

    if (trimmedTaskName !== '') {
      actions.addTask(task);
    }

    cleanTaskNew();
    emitAddTask();
  };

  const emitAddTask = () => {
    if (onAddTask) {
      onAddTask();
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      createTaskNew();
    }
  };

  return (
    <div className="task-new">
      <div className="task-new__field">
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="task-new__input"
          type="text"
          placeholder="New task"
          autoFocus
          onKeyUp={handleKeyUp}
        />
        <UIButton
          className="task-new__button-add button--icon"
          onClick={createTaskNew}
        >
          <span className="button__icon">
            <i className="icon">
              <FontAwesomeIcon icon={faPlusCircle} />
            </i>
          </span>
        </UIButton>
      </div>
    </div>
  );
};

export default TaskNew;
