import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskForm({ task, setEditingTask }) {
  const [formData, setFormData] = useState({
    assignedTo: '',
    dueDate: '',
    description: '',
    status: 'Not Started',
    priority: 'Normal',
    comment: '',
  });

  useEffect(() => {
    if (task) setFormData(task);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      axios.put(`http://localhost:5000/api/task/${task._id}`, formData)
        .then(() => setEditingTask(null));
    } else {
      axios.post('http://localhost:5000/api/task', formData)
        .then(() => setFormData({ assignedTo: '', dueDate: '', description: '', status: 'Not Started', priority: 'Normal', comment: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{task ? 'Edit Task' : 'New Task'}</h2>
      <input placeholder="Assigned To" value={formData.assignedTo} onChange={e => setFormData({ ...formData, assignedTo: e.target.value })} />
      <input placeholder="Due Date" value={formData.dueDate} onChange={e => setFormData({ ...formData, dueDate: e.target.value })} />
      <input placeholder="Description" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
      <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })}>
        <option>Not Started</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <select value={formData.priority} onChange={e => setFormData({ ...formData, priority: e.target.value })}>
        <option>Low</option>
        <option>Normal</option>
        <option>High</option>
      </select>
      <input placeholder="Comment" value={formData.comment} onChange={e => setFormData({ ...formData, comment: e.target.value })} />
      <button type="submit">{task ? 'Update' : 'Add'} Task</button>
    </form>
  );
}

export default TaskForm;
