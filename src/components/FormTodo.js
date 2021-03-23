import React, { useState } from 'react';
import InputTodo from './InputTodo';

const FormTodo = ({ handleAddTodo }) => {

  const [newTodo, setNewTodo] = useState('');

  const handleChange = value => setNewTodo(value)

  const handleSubmit = e => {
    e.preventDefault();
    handleAddTodo(newTodo);
    setNewTodo('')
  }

  return (
    <form className="form-todo wrapper" onSubmit={handleSubmit}>
      <InputTodo
        todo={newTodo}
        handleChange={handleChange}
      />
    </form>
  )

};

export default FormTodo;