import {useState} from 'react';
import List from './List';
import './Input.css'
const Input=()=>{
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

  const addTask = () => {
    console.log(tasks)
    if (newTask.trim() !== '') {
      setTasks([...tasks, { task: newTask, completed: false }]);
      setNewTask('');
    }
  };

    return(<>
    
        <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <List data={tasks} />
      </>
    )
}
export default Input