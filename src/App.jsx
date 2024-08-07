import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login';
import SignUpPage from './components/Signup'; // Add this if you have a signup page
import HomePage from './components/home'; // Ensure the path and filename are correct
import Task from './components/Task';
import Todo from './components/Todo';
import Dashboard from './components/dashboard';
import Layout from './components/layout';
// import Routing from './components/Routing.Jsx';


const App = () => {
  return (
    <Router>
      <Routes>
      {/* <Route path="/" element={<Layout />} /> */}

      {/* <Route path="/Dashboard" element={<Dashboard />} /> */}

      <Route path="/" element={<Todo />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Add this if you have a signup page */}
        {/* Add any other routes here */}
        <Route path="/task" element={<Task />} />
      </Routes>
    </Router>
   
  );
}

export default App;
