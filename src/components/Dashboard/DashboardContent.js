import React, { useRef } from 'react';
import TaskList from '../Task/TaskList';
import TaskNew from '../Task/TaskNew';
import './DashboardContent.scss';

const DashboardContent = () => {
  const taskListRef = useRef();

  const scrollToBottom = () => {
    if (taskListRef.current) {
      taskListRef.current.scrollToBottom();
    }
  };

  return (
    <div className="dashboard-content">
      <TaskList ref={taskListRef} />
      <TaskNew onAddTask={scrollToBottom} />
    </div>
  );
};

export default DashboardContent;
