import React from 'react';
import './TodoCard.css';

const TodoCard = (props) => {
  const handleRemoveClick = (evt) => {
    props.delTodo(props.index);
  }

  const {title, notes, category, context} = props.cardData;

  return (
    <div className='card'>
      <button onClick={ handleRemoveClick }>DELETE</button>
      <h4>{title}</h4>
      <p>Notes: {notes}</p>
      <p>Category: {category}</p>
      <p>Context: {context}</p>
    </div>
  )
}

export default TodoCard;
