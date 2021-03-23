import React, { useState } from 'react';
import InputTodo from './InputTodo';

const FormTodo = () => {

  const [newTodo, setNewTodo] = useState('');

  const handleChange = value => setNewTodo(value)

  const handleSubmit = e => {
    e.preventDefault();
    alert(newTodo);
  }

  return (
    <form className="form-todo wrapper" onSubmit={handleSubmit}>
      <InputTodo
        handleChange={handleChange}
      />
    </form>
  )

};

export default FormTodo;