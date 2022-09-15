import * as c from './../actions/ActionTypes';

const reducer = (state = {}, action) => {
  const { comment, description, user, id, voteCount, dateTime, relativeTimeDistance, timeOpen } = action;
  switch (action.type) {
  case c.ADD_POST:
    return Object.assign({}, state, {
      [id]: {
        comment: comment,
        description: description,
        user: user,
        id: id,
        voteCount: voteCount,
        dateTime: dateTime,
        timeOpen: timeOpen,
        relativeTimeDistance: relativeTimeDistance
      }
    });
    
    
  case c.DELETE_POST:
    const newState = { ...state };
    delete newState[id];
    return newState;

  case c.UPDATE_TIME:
    const newPost = Object.assign({}, state[id], {relativeTimeDistance});
    const updatedState = Object.assign({}, state, {
      [id]: newPost
    });
    return updatedState;
  default:
    return state;
  }
};
  
export default reducer;