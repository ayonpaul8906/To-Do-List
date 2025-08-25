import { useState } from 'react'
import './App.css'
import InputContainer from './components/InputContainer'
import TodoContainer from './components/TodoContainer'


function App() {
  const[inputValue, setInputValue] = useState("")
  const[todos, setTodos] = useState([])

  function writeTodo(event){
    setInputValue(event.target.value)
  }

  function addTodo(){
    if(inputValue.trim() !== ""){
      setTodos([...todos, inputValue])
      setInputValue("")
    }
  }

  function deleteTodo(index){
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)  
  }

  return (
    <>
    <main>
      <h1>To Do List</h1>

      <div id='container'>
        <InputContainer inputValue={inputValue}  writeTodo={writeTodo} addTodo={addTodo}/>
        <TodoContainer todos={todos} deleteTodo={deleteTodo}/>      
        
      </div>
    </main>
    </>
  )
}

export default App
