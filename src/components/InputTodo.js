import React from 'react';

const InputTodo = ({ handleChange }) => (
  <div className="form-group">
    <input 
      className="form-input"
      type="text"
      placeholder="Create a new todo..."
      onChange={(e) => handleChange(e.target.value)}
    />
  </div>
)

export default InputTodo