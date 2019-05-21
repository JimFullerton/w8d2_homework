const todoReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [action.newTodo, ...state]
    case 'DEL_TODO':
      return [...state.slice(0, action.delTodo),
        ...state.slice(action.delTodo + 1)]
    default:
      return state
  };
};

export default todoReducer;
