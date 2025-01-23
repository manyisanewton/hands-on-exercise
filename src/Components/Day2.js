import React, { useState } from 'react';
import Header from './Header';
import TaskList from './TaskList';
import './Day2.css';

const Day2 = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="app">
      <Header title="To-Do List Day2" tagline="Organize your tasks efficiently!" />
      <main className="main-content">
        <TaskList tasks={tasks} onAddTask={addTask} />
      </main>
    </div>
  );
};

export default Day2;
