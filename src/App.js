import React from 'react';
import PageTitle from './components/Page/PageTitle';
import Dashboard from './components/Dashboard/Dashboard';
import UIMessage from './components/UI/UIMessage';
import { useTaskStore } from './store/taskStore';

function App() {
  const { pageTitle } = useTaskStore();

  return (
    <div className="app">
      <PageTitle title={pageTitle} />
      <Dashboard />
      <UIMessage>
        <p>This application uses the browser's Local Storage to store data.</p>
      </UIMessage>
    </div>
  );
}

export default App;