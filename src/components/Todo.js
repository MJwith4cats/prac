import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo
}) => {
  return (
    <div className='Todo'>
      {/* <p>Go to school</p>
        <p>는 paragraph의 약자군아 
        내용이 잘 입력된 것을 확인한 후에*/}
      
      <p onClick={() => toggleComplete(task.id)} className={task.completed ? 'completed' : ''}>
        {task.task}</p>
        
        {/* 해야할 일을 완료했을 때 문항을 클릭해서 회색으로 변하게 만들고 싶으면
        Add some curly braces  and say task.completed then We want the paragraph to have a class of completed 
        otherwise it should just be an empty string so we need to make it so that when we actually click on it
        we can apply this class
        
        togglecompolete의 prop까지 설정해준 후에는 다시 todowrapper로 감
        */}
      
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick ={() => editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick = {() => deleteTodo(task.id)}/>
        {/* 쓰레기통 버튼을 눌렀을 때, 내용이 삭제되도록 기능을 추가함 -> onclick을 이용*/}
      </div>
      {/* 얘네 추가해주고 다시 TodoWrapper로 가기 */}
    </div>
  )
}
