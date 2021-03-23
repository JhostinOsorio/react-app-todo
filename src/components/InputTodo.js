import React from 'react';

const InputTodo = ({ handleChange, todo }) => (
  <div className="form-group">
    <input 
      className="form-input"
      type="text"
      placeholder="Create a new todo..."
      value={todo}
      onChange={(e) => handleChange(e.target.value)}
    />
  </div>
)

export default InputTodo