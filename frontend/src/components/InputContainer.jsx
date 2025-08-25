import React from "react";

function InputContainer({inputValue, writeTodo, addTodo}) {
  return (
    <div className="input-container">
      <input type="text" placeholder="Enter your task" id="input" value={inputValue} onChange={writeTodo}/>
      <button id="btn" onClick={addTodo}>+</button>
    </div>
  );
}

export default InputContainer;
