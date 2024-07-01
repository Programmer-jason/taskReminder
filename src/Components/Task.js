import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`taskk ${task.reminder ? 'reminder' : ""}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text}</h3> <span className='exit'><FaTimes onClick={() => onDelete(task.id)}/></span>
        
        <p>{task.day}</p>
    </div>
  ) 
}

export default Task;