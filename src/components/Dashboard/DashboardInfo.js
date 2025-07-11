import React from 'react';
import { useTaskStore } from '../../store/taskStore';

const DashboardInfo = () => {
  const { getTotalTaskList, getTotalTaskListDone } = useTaskStore();
  const totalTasks = getTotalTaskList();
  const totalDone = getTotalTaskListDone();

  return (
    <div className="dashboard-info">
      <div className="dashboard-info__item">
        <span className="dashboard-info__label">Total tasks:</span>
        <span className="dashboard-info__value">{totalTasks}</span>
      </div>
      <div className="dashboard-info__item">
        <span className="dashboard-info__label">Completed:</span>
        <span className="dashboard-info__value">{totalDone}</span>
      </div>
      <div className="dashboard-info__item">
        <span className="dashboard-info__label">Pending:</span>
        <span className="dashboard-info__value">{totalTasks - totalDone}</span>
      </div>
    </div>
  );
};

export default DashboardInfo;