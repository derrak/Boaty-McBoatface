import * as c from './../actions/ActionTypes';

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addPost = (post) => {
  const { comment, description, user, id, voteCount, dateTime, relativeTimeDistance, timeOpen } = post;
  return {
    type: c.ADD_POST,
    comment: comment,
    description: description,
    user: user,
    id: id,
    voteCount: voteCount,
    dateTime: dateTime,
    relativeTimeDistance: relativeTimeDistance,
    timeOpen: timeOpen

  }
}

export const upVote = (post) => {
  const { comment, description, user, id, voteCount, dateTime, relativeTimeDistance, timeOpen } = post;
  return {
    type: c.ADD_POST,
    comment: comment,
    description: description,
    user: user,
    id: id,
    voteCount: (voteCount + 1),
    dateTime: dateTime,
    relativeTimeDistance: relativeTimeDistance,
    timeOpen: timeOpen
  }
}

export const downVote = (post) => {
  const { comment, description, user, id, voteCount, dateTime, relativeTimeDistance, timeOpen } = post;
  return {
    type: c.ADD_POST,
    comment: comment,
    description: description,
    user: user,
    id: id,
    voteCount: (voteCount - 1),
    dateTime: dateTime,
    relativeTimeDistance: relativeTimeDistance,
    timeOpen: timeOpen
  }
}

export const updateTime = (id, relativeTimeDistance) => ({
  type: c.UPDATE_TIME,
  id: id,
  relativeTimeDistance: relativeTimeDistance
})
