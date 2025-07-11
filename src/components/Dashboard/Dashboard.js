import React, { useEffect } from 'react';
import { useTaskStore } from '../../store/taskStore';
import DashboardInfo from './DashboardInfo';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
  const { 
    taskList, 
    checkTaskListLocalStorage, 
    createTaskListLocalStorage 
  } = useTaskStore();

  useEffect(() => {
    checkTaskListLocalStorage();
  }, [checkTaskListLocalStorage]);

  useEffect(() => {
    createTaskListLocalStorage();
  }, [taskList, createTaskListLocalStorage]);

  return (
    <div className="dashboard">
      <DashboardInfo />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;