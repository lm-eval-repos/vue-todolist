import React, { useEffect } from 'react';
import { useTask } from '../../context/TaskContext';
import DashboardInfo from './DashboardInfo';
import DashboardContent from './DashboardContent';
import './Dashboard.scss';

const Dashboard = () => {
  const { getters, actions } = useTask();

  useEffect(() => {
    actions.checkTaskListLocalStorage();
  }, []);

  useEffect(() => {
    actions.createTaskListLocalStorage();
  }, [getters.getTaskList()]);

  return (
    <div className="dashboard">
      <DashboardInfo />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
