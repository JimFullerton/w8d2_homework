import React, { Component } from 'react';
import NewTodoBox from './containers/NewTodoBox';
import TodoCardsBox from './containers/TodoCardsBox';

class App extends Component {
  render() {
    return (
      <>
        <h1><span id='fledge'>fledge</span><span id='ling'>LING</span></h1>
        <h2>Nu.2.Do.4.U:</h2>
        <NewTodoBox />
        <h2>4.U.2.Do:</h2>
        <TodoCardsBox />
      </>
    );
  }
}

export default App;
