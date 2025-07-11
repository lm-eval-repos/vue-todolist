import React, { useEffect, useRef } from 'react';
import { useTaskStore } from '../../store/taskStore';
import TaskPreview from './TaskPreview';
import UIIcon from '../UI/UIIcon';

const TaskList = () => {
  const { getTaskList, getTotalTaskList } = useTaskStore();
  const taskList = getTaskList();
  const totalTasks = getTotalTaskList();
  const taskListWrapperRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [taskList]);

  const scrollToBottom = () => {
    if (taskListWrapperRef.current) {
      taskListWrapperRef.current.scrollTop = taskListWrapperRef.current.scrollHeight;
    }
  };

  if (totalTasks === 0) {
    return (
      <div className="task-list__wrapper" ref={taskListWrapperRef}>
        <div className="task-list__message">
          <p>Your task list is empty</p>
          <UIIcon name="emptyTasks" />
        </div>
      </div>
    );
  }

  return (
    <div className="task-list__wrapper" ref={taskListWrapperRef}>
      <ul className="task-list">
        {taskList.map((item) => (
          <li key={item.id} className="task-list__item">
            <TaskPreview taskItem={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;