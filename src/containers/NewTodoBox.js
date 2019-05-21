import { connect } from 'react-redux';
import NewTodo from '../components/NewTodo.js';

const mapDispatchToProps = (dispatch) => {
  return {
    newTodo: (newTodo) => {
      dispatch({
        type: 'ADD_TODO',
        newTodo
      })
    }
  };
};

export default connect(null, mapDispatchToProps)(NewTodo);
