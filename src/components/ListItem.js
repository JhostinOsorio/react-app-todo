import React from 'react';

const ListItem = ({ name, status, handleStatusTodo, handleDeleteTodo}) => {

  return (
    <li className={`list__item ${status ? 'list__item--finish' : ''}`}>
      <span className="list__status" onClick={() => handleStatusTodo(name)}></span>
      <span className="list__text">{name}</span>
      <span className="list__close" onClick={() => {handleDeleteTodo(name)}}></span>
    </li>
  )
}

export default ListItem