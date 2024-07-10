import { useState } from 'react';
import './List.css';
const List=(data)=>{
    const [tasks, setTasks] = useState([]);
    const markComplete = (index) => {
        const updatedTasks = data.map((task, i) =>
          i === index ? { ...task, completed: true } : task
        );
        setTasks(updatedTasks);
      };
    
      const deleteTask = (index) => {
        const updatedTasks = data.filter((_, i) => i !== index);
        setTasks(updatedTasks);
      };
    return(
        <div className="list-name">
              <ul className="task-list">
        {data.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span>{task.task}</span>
            <button onClick={() => markComplete(index)}>Complete</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

        </div>
    )
}
export default List;