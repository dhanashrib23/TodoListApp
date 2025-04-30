const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post('/api/task', async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
});

router.put('/api/task/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

router.delete('/api/task/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
