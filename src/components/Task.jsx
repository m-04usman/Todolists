import React, { useState } from 'react';

const Task = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Hassan',
      task: 'Playing Hockey',
    },
  ]);
  const [user, setUser] = useState('');
  const [task, setTask] = useState('');
  const [random, setRandom] = useState(2);
  const [editTask, setEditTask] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const inputHandler = (e) => {
    setUser(e.target.value);
  };

  const taskInputHandler = (e) => {
    setTask(e.target.value);
  };

  const onAddHandler = () => {
    if (user && task) {
      setRandom(random + 1);
      const newData = {
        id: random,
        name: user,
        task: task,
      };
      setData([...data, newData]);
      setUser('');
      setTask('');
    }
  };

  const onDeleteHandler = (id) => {
    const updated = data.filter((ele) => ele.id !== id);
    setData(updated);
  };

  const updatedTaskHandler = (e) => {
    setNewTask(e.target.value);
  };

  const editHandler = (id) => {
    setEditTask(true);
    setCurrentTaskId(id);
    const taskToEdit = data.find((ele) => ele.id === id);
    setNewTask(taskToEdit.task);
  };

  const updateTaskHandler = () => {
    const updated = data.map((ele) => {
      if (ele.id === currentTaskId) {
        return { ...ele, task: newTask };
      }
      return ele;
    });
    setData(updated);
    setEditTask(false);
    setNewTask('');
    setCurrentTaskId(null);
  };

  console.log(data);
  return (
    <div>
      <h1 className="text-3xl font-bold">Posts Of Today</h1>
      <div>
        <input
          onChange={inputHandler}
          type="text"
          placeholder="Enter Your Name"
          value={user}
          className="p-1 border-1 focus:outline"
        />
        <input
          onChange={taskInputHandler}
          type="text"
          placeholder="Enter Your Task"
          value={task}
          className="p-1 border-1 focus:outline ml-2"
        />
        <button
          onClick={onAddHandler}
          className="bg-blue-500 text-white h-[30px] w-[60px] rounded-md ml-2"
        >
          Add
        </button>
      </div>
      {data.map((ele) => (
        <div className="flex flex-row w-[400px]" key={ele.id}>
          <div className="border-2 border-gray-400 mt-2 w-[400px] p-2">
            <p>{ele.name}</p>
            <p>{ele.task}</p>
            <div className="flex flex-row">
              <button
                onClick={() => onDeleteHandler(ele.id)}
                className="bg-blue-500 text-white h-[30px] w-[60px] rounded-md ml-2"
              >
                Delete
              </button>
              <button
                onClick={() => editHandler(ele.id)}
                className="bg-blue-500 text-white h-[30px] w-[100px] rounded-md ml-2"
              >
                Edit Task
              </button>
            </div>
          </div>
        </div>
      ))}
      {editTask && (
        <div>
          <input
            onChange={updatedTaskHandler}
            type="text"
            placeholder="Enter updated task"
            value={newTask}
            className="p-1 border-1 focus:outline"
          />
          <button
            onClick={updateTaskHandler}
            className="bg-blue-500 text-white h-[30px] w-[100px] rounded-md ml-2"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
