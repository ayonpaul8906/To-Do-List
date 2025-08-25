import { useState } from 'react'
import './App.css'
import InputContainer from './components/InputContainer'
import ListContainer from './components/ListContainer'


function App() {
  const[inputValue, setInputValue] = useState("")
  const[list, setList] = useState([])

  function writeTodo(event){
    setInputValue(event.target.value)
  }

  return (
    <>
    <main>
      <h1>To Do List</h1>

      <div id='container'>
        <InputContainer inputValue={inputValue}  writeTodo={writeTodo} />
        <ListContainer />      
        
      </div>
    </main>
    </>
  )
}

export default App
