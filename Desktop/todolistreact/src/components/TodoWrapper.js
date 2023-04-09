import React, {useState} from 'react'
//parentState를 만들기 위해 useState를 import
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import { EditTodoform } from './EditTodoform';
uuidv4(); //initialize해줌  --> 그 다음에 TodoForm으로 넘어감

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]) //empty array
  //어떻게 todoform에 있는 value를 todowrapper로 넘겨주느냐 -> props를 사용함
  //todowrapper에 addTodo라는 property를 추가함

  //Todo.js에서 task.task 이런거 추가한 후, useState의 빈 공간에 {}dummy를 추가해도 되고..
  //아니면 value를 바로 추가해도 됨 입력하면 value가 바로 추가됨

  const addTodo = todo => {
    setTodos([...todos, {id:uuidv4(), task : todo, completed:false, isEditing : false}])

    console.log(todos)
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ?
      {todo, complete: !todo.complete} : todo))
  }
 
  // we will take here todo which will be the value
 //and we need to make a copy of the current todo so the current state so we use the spread operator which makes a copy 
 //and we're adding ID which will equal to uuidv4, and the task will be todo a passing in by default completed will be false and is editing will be false
// and we actually need to import uuid so what we need to copy.. 뭘 카피하라는데 어디서 카피해온 건지 모르겠음
//아무튼 윗쪽에 uuid를 추가해오도록 입력해줌


//--> 목록에 있는 내용을 완료했을 때
//it will take an ID and then we set Todos and we're mappipng through the to do's first so this map will take a to do 
//and we'll check i if the to do the ID equals the ID we passed in if that's the case then we'll take a copy of that to do
// and we're going to update the completed value so we'll say completed or equals not completed
// so basically if this is false it'll be equal to true and if it's true be equal to false and vice versa
//and else if it's not equal to ID we're passing that we just want to return the todo

//--> 여기까지 다 되었으면 목록에 있는 내용을 삭제하는 법

const deleteTodo = id => {
  setTodos([todos.filter(todo => todo.id !== id)])
}
//id는 parameter
//이거는 만약에 todo ID가 우리가 입력한 아이디와 같지 않다면, 그 값을 return하길 원함
//그러니까, 우리가 입력한 아이디와 같은 todo ID를 지우려고 하는 것임
//일단 이렇게 기능을 만들어놓고 Todo로 가서, trash icon을 눌렀을 때 기능이 실행되도록 함

// 목록에 있는 내용을 수정하는 법
const editTodo = id =>{
  setTodos(todos.map(todo => todo.id ===id ? 
    {...todo, isEditing: !todo.isEditing} : todo))
}
//what we're doing is setting the todos, and inside  of here we'll say todos.map which we'll take it to do
//and we'll check in if todo.id is equal to the ID we passed in, so if we're making a copy of the todo by using the spread operator right here, 
//and what we're saying is editing should be not todo that is editing
//so it should be the opposite of whatever the current value is.
//and if the todo id is not equal to the id we passed in, return that todo value.
//Todoform에서 편집 만들어야 함 --> Todoform에 있는 내용 copy해서 editform으로 이동해주고, editform에서 편집기능 만듦.

const editTask = (task,id) => {
  setTodos(todos.map(todo => todo.id ===id ? {...todo, task, isEditing:!todo.isEditing} :todo))
}


return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1> 
       <TodoForm addTodo = {addTodo}/>
       {/* 여기에 addTodo라는 property를 추가한 후, addTodo function을 추가함 */}

      {/* <Todo/> */}
      {/* 모양이 좀 이상하긴 하지만 Todo에 있는 내용들이 잘 추가되었음 */}
      {/* And then we need to generate a to-do for each value in the state */}

      {todos.map((todo, index) => (
          todo.isEditing ? (
            <EditTodoform editTodo={editTask} task={todo}/>
          ) : (
              <Todo task={todo} key={index}
              toggleComplete = {toggleComplete} deleteTodo ={deleteTodo} editTodo = {editTodo}/>
              //togglecomplete를 써줬으면 위에 function도 추가해줌

          )
          
          
          ))}

    </div>
  )
}
