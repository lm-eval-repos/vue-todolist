import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useTask } from '../../context/TaskContext';
import UIButton from '../UI/UIButton';
import './TaskEdit.scss';

const TaskEdit = ({ task, onEditTask }) => {
  const { actions } = useTask();
  const [taskCopy, setTaskCopy] = useState(task);

  useEffect(() => {
    if (task !== taskCopy) {
      setTaskCopy(task);
    }
  }, [task]);

  const editTaskName = (taskToEdit) => {
    actions.updateTask(taskToEdit);
  };

  const emitEditTask = () => {
    if (onEditTask) {
      onEditTask();
    }
  };

  const handleSave = () => {
    editTaskName(taskCopy);
    emitEditTask();
  };

  const handleNameChange = (e) => {
    setTaskCopy({
      ...taskCopy,
      name: e.target.value
    });
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
            onChange={handleNameChange}
            className="task-edit__field"
            type="text"
          />
        </article>

        <UIButton
          className="task-edit__button-save button--bg-color-3"
          onClick={handleSave}
        >
          <span className="button__icon">
            <i className="icon">
              <FontAwesomeIcon icon={faEdit} />
            </i>
          </span>
          <span>Save</span>
        </UIButton>
      </div>
    </section>
  );
};

export default TaskEdit;
