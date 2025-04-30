import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditTaskForm = ({ task, onSuccess }) => {
  const [form, setForm] = useState(task);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/task/${task._id}`, form);
      onSuccess();
    } catch (err) {
      console.error('Error updating task', err);
    }
  };

  useEffect(() => {
    setForm(task);
  }, [task]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Task</h2>
      <input name="assignedTo" value={form.assignedTo} onChange={handleChange} />
      <input name="description" value={form.description} onChange={handleChange} />
      <input name="status" value={form.status} onChange={handleChange} />
      <input name="priority" value={form.priority} onChange={handleChange} />
      <input name="dueDate" value={form.dueDate} onChange={handleChange} />
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTaskForm;
