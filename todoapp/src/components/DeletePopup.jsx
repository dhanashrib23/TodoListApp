import React from 'react';
import axios from 'axios';

const DeletePopup = ({ task, onClose, onConfirm }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/task/${task._id}`);
      onConfirm();
    } catch (err) {
      console.error('Error deleting task', err);
    }
  };

  return (
    <div style={{ background: 'black', padding: 20 }}>
      <p>Do you want to delete "{task.description}"?</p>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={onClose}>No</button>
    </div>
  );
};

export default DeletePopup;
