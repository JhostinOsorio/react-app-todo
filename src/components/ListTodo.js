import React from 'react';
import { ReactSortable } from 'react-sortablejs'
import ListItem from './ListItem';

const ListTodo = ({ todos, setTodos, handleStatusTodo, handleDeleteTodo }) => (
  <ReactSortable
    tag="ul"
    list={todos}
    setList={setTodos}
    animation={200}
    className="wrapper list-todo"
  >
    {todos.map((t, i) => (
      <ListItem 
        key={i}
        index={i}
        name={t.name} 
        status={t.status}
        handleStatusTodo={handleStatusTodo}
        handleDeleteTodo={handleDeleteTodo} 
      />
    ))}
  </ReactSortable>
)

export default ListTodo