import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeletePopup from './DeletePopup';

const TaskList = ({ onEdit }) => {
  const [tasks, setTasks] = useState([]);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data);
    } catch (err) {
      console.error('Error fetching tasks', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>All Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>
                <button onClick={() => onEdit(task)}>Edit</button>
                <button onClick={() => setTaskToDelete(task)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {taskToDelete && (
        <DeletePopup
          task={taskToDelete}
          onClose={() => setTaskToDelete(null)}
          onConfirm={() => fetchTasks()}
        />
      )}
    </div>
  );
};

export default TaskList;
