import { useState } from 'react'
import {MdEventNote,MdDelete} from 'react-icons/md'
const App = () => {
  const [tasks,setTasks]=useState([]);
  const [task,setTask]=useState("");

  const addTasks=()=>{
    if(task){
      setTasks([...tasks,task]);
      setTask("");
    }
  }
  const removeTask=(index)=>{
    const newTask=tasks.filter((_,i)=>i!==index);
    setTasks(newTask);
  }
  return (
    <>
    <div className="container">
      <div className="todo">
        <h1 className='heading'>
          <span className='spaning'>
            <MdEventNote  className='note'/> Add Your Task.
          </span>
        </h1>
        <div className="d-flex">
          <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Add your task' />
          <button onClick={addTasks} className='btn'>Add + </button>
        </div>
        <ul className='items'>
          {
            tasks.map((task,index)=>(
              <li key={index}>
                <input type="checkbox" />
                <span>{task}</span>
                <MdDelete className='remove' onClick={()=>removeTask(index)}/>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    </>
  )
}

export default App