const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  assignedTo: String,
  dueDate: String,
  description: String,
  status: String,
  priority: String,
  comment: String,
});

module.exports = mongoose.model('Task', taskSchema);
