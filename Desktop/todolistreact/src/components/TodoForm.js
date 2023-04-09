import React, {useState} from 'react'
// We need to keep track whatever the user is typing in and for that we need to import use state so we need to import useState 


export const TodoForm = ({addTodo}) => {//아까 그 prop을 import해줌
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();

    // console.log(value);

    addTodo(value)

    setValue("")

  }
      
  // handleSubmit은 e라는 event를 발생시킴. and by default when you submit forms the page reloads so to prevent that we need to add a function called prevent dafault
  // so it'll be called e.prevent default whih will prevent the default action
  //and to test it for now, use console.log(value);

  //when it works alright, then the issue is we have this value here and we need to pass this value to the todoState
  //and we can't keep the state in here because other components would need to access the state as well so we need to do is actually create that state in the parent component which is a todowrapper
  //그래서 todowrapper로 이동

  // ----- TodoWrapper에서 TodoForm으로 다시 돌아와서, console.log(value)대신 addTodo를 넣어줌
  //so this way we can pass the state from the todoform to todowrapper

  //todos가 array에 제대로 들어갔는지 확인한 후에, textarea에 typing후 글자가 남아있지 않게끔 작업해줌
  //input text에 value를 넣어주지 않았기 때문에 value 넣어줌

  //form 제출한 후에 form을 비우기 위해서 setValue("")를 넣어줌

  //잘 비워진 것을 확인한 후, 입력한 내용들이 form 밑에 나타나도록 기능을 추가함
  //Todo.js로 가기


  return (
     
    <form className='TodoForm' onSubmit={handleSubmit}>
        {/* <input type="text" className='todo-input' placeholder='what is the task today?' onChange={(e) => console.log(e.target.value)}/> */}
        {/* 일단 먼저 console.log를 써서 텍스트 창에 입력한 자료가 잘 들어가는지 확인함 */}
        <input type="text" className='todo-input' value = {value} placeholder='what is the task today?' onChange={(e) => setValue(e.target.value)}/>
        {/* console.log를 지우고 setValue로 바꿔줌 */}
        {/* 그 다음에는 function을 추가해줘야 함 -> form that captures the value of the state when we submit */}
        {/* so you need to add an event on submit and make it equal to handle submit ->onSubmit={handleSubmit}을 추가 */}
        {/* 그다음 handleSubmit function을 추가해줌 */}
        <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
}
