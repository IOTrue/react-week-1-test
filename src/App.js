import React, { useState } from "react";
import './App.css';


function App() {

  const [lists, setLists] = useState([
    {id: 1, title: "react를 배워봅시다"} //기본 리스트
  ])

  const [title, setTitle] = useState('')

  const addListHnadler = (e)=>{
    const newList = {
      id: lists.length+1,
      title: title
    }
    e.preventDefault() //화면 리렌더링 방지
    setLists([...lists, newList])
    setTitle('') //인풋 초기화
    
  }

  return (
    <div className="App">
      <form action="#" onSubmit={addListHnadler}>
        <input type="text" className="input-title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        <button>추가하기</button>
      </form>
      <h1>Todo List</h1>
      <ul className="todo-ul">
      {lists.map((list)=>{
        return(
          <li key={list.id}>{list.title}</li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
