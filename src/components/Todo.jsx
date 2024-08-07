import React from 'react';
import { useNavigate } from 'react-router-dom';
import list from "../assets/checklist.png";

const Todo = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <nav className="bg-gradient-to-l from-purple-400 via-pink-500 to-red-500 h-[60px] w-full rounded flex flex-row items-center justify-between p-4 md:p-8 text-[20px] md:text-[30px] font-sans font-bold">
        <div className="flex items-center">
          <img src={list} alt="image" className="h-[40px] w-[40px]" />
          <p>To-Do</p>
        </div>
        <div className="flex space-x-2 md:space-x-3">
          <button
            onClick={handleSignUp}
            className="bg-blue-600 h-[40px] w-[75px] rounded-md text-white text-sm md:text-xl text-center"
          >
            SignUp
          </button>
          <button
            onClick={handleLogin}
            className="bg-red-400 h-[40px] w-[75px] rounded-md text-white text-sm md:text-xl text-center"
          >
            LogIn
          </button>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center text-center mt-20 p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to To-Do List</h1>
        <p className="text-lg md:text-2xl mb-6">
          Organize your tasks efficiently with our easy-to-use to-do list application. 
          Create, update, and manage your tasks with ease.
        </p>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          <button
            onClick={handleSignUp}
            className="bg-blue-600 px-6 py-2 rounded-md text-white text-lg md:text-xl"
          >
            Sign Up
          </button>
          <button
            onClick={handleLogin}
            className="bg-red-400 px-6 py-2 rounded-md text-white text-lg md:text-xl"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
