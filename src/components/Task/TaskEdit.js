import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useTaskStore } from '../../store/taskStore';
import UIButton from '../UI/UIButton';

const TaskEdit = ({ task, onEditTask }) => {
  const [taskCopy, setTaskCopy] = useState(task);
  const { updateTask } = useTaskStore();

  useEffect(() => {
    setTaskCopy(task);
  }, [task]);

  const handleTaskNameChange = (e) => {
    setTaskCopy({
      ...taskCopy,
      name: e.target.value
    });
  };

  const handleSave = () => {
    updateTask(taskCopy);
    onEditTask();
  };

  return (
    <section className="task-edit">
      <h3 className="task-edit__title">
        Edit task
      </h3>
      <div className="task-edit__content">
        <article className="task-edit__item">
          <label className="task-edit__subtitle">
            Task name
          </label>
          <input
            value={taskCopy.name}
            onChange={handleTaskNameChange}
            className="task-edit__field"
            type="text"
          />
        </article>

        <UIButton
          className="task-edit__button-save button--bg-color-3"
          onClick={handleSave}
        >
          <span className="button__icon">
            <FontAwesomeIcon icon={faEdit} />
          </span>
          <span>Save</span>
        </UIButton>
      </div>
    </section>
  );
};

export default TaskEdit;