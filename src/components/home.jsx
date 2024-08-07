import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import list from "../assets/checklist.png";

const HomePage = () => {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [taskDay, setTaskDay] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || {};
    const userTasks = storedTasks[auth.currentUser.uid] || [];
    setTasks(userTasks);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      alert('Failed to log out');
    }
  };

  const handleCreateOrUpdateTask = (e) => {
    e.preventDefault();
    if (taskName && taskDay && taskTime) {
      if (editingTaskIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editingTaskIndex ? { taskName, taskDay, taskTime } : task
        );
        setTasks(updatedTasks);
        updateLocalStorage(updatedTasks);
        setEditingTaskIndex(null);
      } else {
        const newTask = { taskName, taskDay, taskTime };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        updateLocalStorage(updatedTasks);
      }
      setTaskName('');
      setTaskDay('');
      setTaskTime('');
    } else {
      alert('Please fill all fields');
    }
  };

  const handleEditTask = (index) => {
    setEditingTaskIndex(index);
    setTaskName(tasks[index].taskName);
    setTaskDay(tasks[index].taskDay);
    setTaskTime(tasks[index].taskTime);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const updateLocalStorage = (updatedTasks) => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || {};
    storedTasks[auth.currentUser.uid] = updatedTasks;
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-4">
       <div className='text-center text-white mb-8'>
                <h1 className='text-3xl md:text-4xl font-bold'>Welcome To CRUD Operation</h1>
                <p className='text-base md:text-lg mt-2'>Create Your Tasks And Manage Them </p>
            </div>
      {/* <div className="bg-gradient-to-l from-purple-400 via-pink-500 to-red-500 h-[60px] w-full rounded flex flex-row items-center justify-between p-4 md:p-8 text-[20px] md:text-[30px] font-sans font-bold">
        <div className="flex items-center">
          <img src={list} alt="image" className="h-[40px] w-[40px]" />
          <p>To-Do</p>
        </div>
        <div className="flex space-x-2 md:space-x-3">
          <button className="bg-blue-600 h-[40px] w-[75px] rounded-md text-white text-sm md:text-xl text-center">SignUp</button>
          <button className="bg-red-400 h-[40px] w-[75px] rounded-md text-white text-sm md:text-xl text-center">LogIn</button>
        </div>
      </div> */}
      
      <div className="bg-white text-gray-800 p-6 rounded shadow-md w-full max-w-md mb-6 mt-[60px] bg-radial-gradient-custom">
        <h2 className="text-3xl font-bold mb-4 text-center">Create Your Tasks</h2>
        <p className="mb-6 text-gray-700 text-center underline">Enter Details</p>

        <form onSubmit={handleCreateOrUpdateTask} className="space-y-6">
          <input
            type="text"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="date"
            placeholder="Task Day"
            value={taskDay}
            onChange={(e) => setTaskDay(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="time"
            placeholder="Task Time"
            value={taskTime}
            onChange={(e) => setTaskTime(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            {editingTaskIndex !== null ? 'Update Task' : 'Create Task'}
          </button>
        </form>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-4"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full bg-rad">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="bg-radial-gradient-custom text-gray-800 p-4 rounded shadow-md flex flex-col justify-center" style={{ width: '250px', height: '200px' }}>
              <p><strong>Task Name:</strong> {task.taskName}</p>
              <p><strong>Task Day:</strong> {task.taskDay}</p>
              <p><strong>Task Time:</strong> {task.taskTime}</p>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => handleEditTask(index)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="justify-center flex flex-row w-[95vw]">
            <p className="text-center">No tasks available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
