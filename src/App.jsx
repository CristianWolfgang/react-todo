import { useEffect, useReducer, useState } from "react"
import { TodoList } from "./components/TodoList";
import fetchInfo from "./fetch-info";
import { ACTIONS, reducer } from "./reducer";
import { AddBtn, Input } from "./components/Input";
import "./App.css";
function App() {
  const [number,setNumber] = useState(0),
  [obj,setObj] = useState(null),
  [toDo,dispatchToDo] = useReducer(reducer,{}),
  handleInput = e=>setNumber(e.target.value),
  handleClick =()=>(fetchInfo("http://www.boredapi.com/api/activity?participants="+number,setObj));
  
  useEffect(()=>{
    if(obj){
      dispatchToDo({
        type:ACTIONS.add,
        obj
      })
    }    
  },[obj]);

  return (
    <>
    <div>
      <Input type="number" value={number || ""} onChange={handleInput} placeholder="número de personas" min={0}/>
      <AddBtn onClick={handleClick}>Añadir</AddBtn>
    </div>
    <TodoList items={toDo} dispatch={dispatchToDo}/>
    </>
  )
}

export default App
