 import React, { useState } from 'react';
import './TaskList.css';

 const TaskList = ({ tasks,  onAddTask }) => {
  const [newTask, setNewTask] = useState('');
  const [TaskList, setTaskList] = useState(tasks.map ((task) => ({ text: task, done: false })));

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTaskList([...TaskList, { text: newTask, done: false }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updateTask = TaskList.filter((_, i) => i !== index);
    setTaskList(updateTask);
  };

  const handleEditTask = (index) => {
    const newText = prompt('Edit your task:', TaskList[index].text);
    if (newText) {
      const updateTask = TaskList.map((task, i) =>
        i === index ? { ...task, text: newText } : task
      );
      setTaskList(updateTask);
    }
  };

  const toggleTaskDone = (index) => {
     const updateTask = TaskList.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
      );
    setTaskList(updateTask);
  };

    return ( < div style={{backgroundImage:"src/Components/assets/Day2.jpg"}}>
    <div className="task-list">
      <h2 className="task-list-heading">Your Tasks</h2>
        <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task..."
            value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
          <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="task-items">
        {TaskList.length > 0 ? (
            TaskList.map((task, index) => (
            <li key={index} className={task.done ? 'task-item done' : 'task-item'}>
              <span>{task.text}</span>
               <div className="task-actions">
                <button className="edit-button" onClick={() => handleEditTask(index)}>
                  Edit
                   </button>
                <button className="delete-button" onClick={() => handleDeleteTask(index)}>
                  Delete
                   </button>
                <button className="toggle-button" onClick={() => toggleTaskDone(index)}>
                  {task.done ? 'Undo' : 'Done'}
                </button>
  </div>
            </li>
          ))
         ) : (
            <p className="no-tasks">No tasks added yet.</p>
        )}
        </ul>
    </div>
     </div>
  );
};

 export default TaskList;
