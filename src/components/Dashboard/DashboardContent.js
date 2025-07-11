import React from 'react';
import TaskNew from '../Task/TaskNew';
import TaskList from '../Task/TaskList';

const DashboardContent = () => {
  return (
    <div className="dashboard-content">
      <TaskNew />
      <TaskList />
    </div>
  );
};

export default DashboardContent;