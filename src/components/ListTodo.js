import React from 'react';
import ListItem from './ListItem';

const ListTodo = ({ todos, handleStatusTodo, handleDeleteTodo }) => {
  return (
    <ul className="wrapper list-todo">
      {todos.map((t, i) => 
        <ListItem 
          key={i} 
          name={t.name} 
          status={t.status}
          handleStatusTodo={handleStatusTodo}
          handleDeleteTodo={handleDeleteTodo} 
        />)}
    </ul>
  )
}

export default ListTodo