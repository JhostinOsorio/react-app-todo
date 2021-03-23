import React, { useEffect, useState } from 'react';
import FormTodo from '../components/FormTodo';
import HeaderTodo from '../components/HeaderTodo';

const Home = () => {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const todosLocal = localStorage.getItem('todos')
    if (todosLocal) {
      setTodos(JSON.parse(todosLocal))
    }
  }, [])

  const handleAddTodo = newTodo => {
    setTodos([...todos, newTodo])
  }
  
  useEffect(() => {
    console.log(todos)
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <HeaderTodo/>
      <FormTodo
        handleAddTodo={handleAddTodo}
      />
    </>
  )
};

export default Home;