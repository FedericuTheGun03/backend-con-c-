import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [reload, setReload] = useState(false);

  const handleSave = () => {
    setReload(!reload);
  };

  return (
    <div className="App">
      <TaskForm onSave={handleSave} />
      <TaskList />
    </div>
  );
}

export default App;
