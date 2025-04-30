import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import EditTaskForm from './components/EditTaskForm';

function App() {
  const [editTask, setEditTask] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="App">
      {editTask ? (
        <EditTaskForm task={editTask} onSuccess={() => { setEditTask(null); setRefresh(!refresh); }} />
      ) : (
        <TaskForm onSuccess={() => setRefresh(!refresh)} />
      )}
      <hr />
      <TaskList onEdit={(task) => setEditTask(task)} key={refresh} />
    </div>
  );
}

export default App;
