import React from "react";

function Todo({todo, index, deleteTodo}) {
  return (
    <div id="list">
      <div className="list-item">
        <span>{todo}</span>
        <div className="actions">
          <input type="checkbox" />
          <button className="delete-btn" onClick={()=>deleteTodo(index)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
