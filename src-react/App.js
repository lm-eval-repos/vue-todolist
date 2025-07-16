import React from 'react';
import { useTask } from './context/TaskContext';
import PageTitle from './components/Page/PageTitle';
import Dashboard from './components/Dashboard/Dashboard';
import UIMessage from './components/UI/UIMessage';

function App() {
  const { getters } = useTask();

  return (
    <div className="app">
      <PageTitle title={getters.getPageTitle()} />
      <Dashboard />
      <UIMessage>
        <p>This application uses the browser's Local Storage to store data.</p>
      </UIMessage>
    </div>
  );
}

export default App;
