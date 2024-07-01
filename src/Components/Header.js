import React, { useState } from 'react' 
import './header.css'

const Header = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Please Fill The Task')
            return
        }
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    
    <form onSubmit={onSubmit}>
        <header className='header'>
            <h1 className='title'>Task Reminder</h1>
            <label htmlFor="addTask">Task</label>
            <input type="text" name="addTask" placeholder='Add task' id='addTask' className='input' value={text} onChange={(e) => setText(e.target.value)}/>

            <label htmlFor="dateAndTime">Date & Time</label>
            <input type="text" name="dateAndTime" placeholder='Date & Time' className='input' value={day} onChange={(e) => setDay(e.target.value)}/>
            
            <div style={{display: 'flex', justifyContent: 'space-around', width: '70px', marginBottom: '10px'}}>
                <label htmlFor="dateAndTime">Remind</label>
                <input type="checkbox" name='dateAndTime' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} 
                checked={reminder}/>
            </div>
            <input type='submit' value='Add' className='btn'></input>
        </header>
    </form>
    
  )
}


export default Header