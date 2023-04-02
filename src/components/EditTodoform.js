import React, {useState} from 'react'


export const EditTodoform = ({editTodo, task}) => {//아까 그 prop을 import해줌
  const [value, setValue] = useState(task.task);
  // 목록의 내용을 고칠 때, edit할 때 나오는 textarea의 default값이 원래 넣어놨던 목록의 내용이길 바라기 때문에, useState에 task.task를 넣어줌
  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id)

    setValue("")

  }
      


  return (
     
    <form className='TodoForm' onSubmit={handleSubmit}>

        <input type="text" className='todo-input' value = {value} placeholder='Update task' 
        onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className='todo-btn'>Update</button>
    </form>
  )
}
