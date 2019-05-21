import { connect } from 'react-redux';
import TodoCards from '../components/TodoCards';

const mapStateToProps = (state) => {
  return {
    cards: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delTodo: (delTodo) => {
      dispatch({
        type: 'DEL_TODO',
        delTodo
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoCards);
