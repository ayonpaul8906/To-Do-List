import React from 'react'
import Todo from './Todo'

function ListContainer({todos, deleteTodo}) {
  return (
    <div className="list-container">
          {todos.map((todo, index)=>{
            return (
              <Todo todo={todo} key={todo} index={index} deleteTodo={deleteTodo} />
            )
          }) }
    </div>
  )
}

export default ListContainer
