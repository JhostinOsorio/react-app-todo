import React, { useEffect, useState } from 'react';
import arrayMove from 'array-move';
import FormTodo from '../components/FormTodo';
import HeaderTodo from '../components/HeaderTodo';
import ListTodo from '../components/ListTodo';

const Home = () => {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const todosLocal = localStorage.getItem('todos')
    if (todosLocal) {
      setTodos(JSON.parse(todosLocal))
    }
  }, [])

  const handleAddTodo = newTodo => {
    setTodos([...todos, {'name': newTodo, 'status': false}])
  }

  const handleStatusTodo = name => {
    const array_todos = [...todos];
    array_todos.forEach(t => {
      if (t.name === name) {
        t.status = !t.status
      }
    })
    setTodos(array_todos)
  }

  const handleDeleteTodo = name => {
    const array_todos = todos.filter(t => t.name !== name)
    setTodos(array_todos)
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setTodos(arrayMove(todos, oldIndex, newIndex))
  }
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <HeaderTodo/>
      <FormTodo
        handleAddTodo={handleAddTodo}
      />
      <ListTodo
        todos={todos}
        setTodos={setTodos}
        handleStatusTodo={handleStatusTodo}
        handleDeleteTodo={handleDeleteTodo}
        onSortEnd={onSortEnd}
      />
    </>
  )
};

export default Home;