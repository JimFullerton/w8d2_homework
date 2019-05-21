import React from 'react';
import TodoCard from './TodoCard';
import './TodoCards.css';

const TodoCards = (props) => {

  const listItems = props.cards.map((cardData, index) => {
    return <TodoCard
      cardData={ cardData }
      key={index}
      index={index}
      delTodo={props.delTodo}
    />
  });

  return (
    <div id='cards-list'>
      { listItems }
    </div>
  );
}

export default TodoCards;
