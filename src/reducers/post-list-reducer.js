const reducer = (state = {}, action) => {
  const { comment, description, user, id, voteCount, dateTime } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        comment: comment,
        description: description,
        user: user,
        id: id,
        voteCount: voteCount,
        dateTime: dateTime
      }
    });

    
  case 'DELETE_POST':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

export default reducer;