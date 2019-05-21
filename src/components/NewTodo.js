import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      notes: '',
      category: '',
      context: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const newTodo = {
      title: evt.target.title.value,
      notes: evt.target.notes.value,
      category: evt.target.category.value,
      context: evt.target.context.value
    }
    this.props.newTodo(newTodo);
    this.reset();
  }

  reset() {
    this.setState({
      title: '',
      notes: '',
      category: '',
      context: ''
    });
  }

  handleInputChange(evt) {
    const field = evt.target.id;
    const value = evt.target.value;
    this.setState({ [field]: value });
  }

  render() {
    return (
      <form onSubmit={ this.handleFormSubmit.bind(this) } autoComplete='off'>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          name='title'
          id='title'
          value={this.state.title}
          onChange={this.handleInputChange}
        />

        <label htmlFor='notes'>Notes:</label>
        <input
          type='text'
          name='notes'
          id='notes'
          value={this.state.notes}
          onChange={this.handleInputChange}
        />

        <label htmlFor='category'>Category:</label>
        <select
          name='category'
          id='category'
          value={this.state.category}
          onChange={this.handleInputChange}
        >
          <option value='Work-Related'>Work-Related</option>
          <option value='DIY'>DIY</option>
          <option value='Music'>Music</option>
          <option value='Photography'>Photography</option>
          <option value='Miscellaneous'>Miscellaneous</option>
          <option value='Coding'>Coding</option>
          <option value='Social'>Social</option>
        </select>

        <label htmlFor='context'>Context:</label>
        <select
          name='context'
          id='context'
          value={this.state.context}
          onChange={this.handleInputChange}
        >
          <option value='@home'>@home</option>
          <option value='@work'>@work</option>
          <option value='@town'>@town</option>
          <option value='@away'>@away</option>
          <option value='@phone'>@phone</option>
          <option value='@shops'>@shops</option>
          <option value='@email'>@email</option>
        </select>

        <input type='submit' value='Add Task' />
      </form>
    );
  }

};

export default NewTodo;
