import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useTaskStore } from '../../store/taskStore';
import UIButton from '../UI/UIButton';

const TaskNew = () => {
  const [taskName, setTaskName] = useState('');
  const { getTaskLast, addTask } = useTaskStore();

  const createTaskId = () => {
    const lastTask = getTaskLast();
    return lastTask ? lastTask.id + 1 : 1;
  };

  const handleCreateTask = () => {
    const taskNameTrimmed = taskName.trim();
    if (taskNameTrimmed !== '') {
      const task = {
        id: createTaskId(),
        name: taskNameTrimmed,
      };
      addTask(task);
      setTaskName('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreateTask();
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
          onKeyPress={handleKeyPress}
        />
        <UIButton
          className="task-new__button-add button--icon"
          onClick={handleCreateTask}
        >
          <span className="button__icon">
            <FontAwesomeIcon icon={faPlusCircle} />
          </span>
        </UIButton>
      </div>
    </div>
  );
};

export default TaskNew;