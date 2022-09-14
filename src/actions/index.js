export const deletePost = id => ({
  type: 'DELETE_POST',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addPost = (post) => {
  const { comment, description, user, id, voteCount, dateTime } = post;
  return {
    type: 'ADD_POST',
    comment: comment,
    description: description,
    user: user,
    id: id,
    voteCount: voteCount,
    dateTime: dateTime
  }
}

export const upVote = (post) => {
  const { comment, description, user, id, voteCount, dateTime } = post;
  return {
    type: 'ADD_POST',
    comment: comment,
    description: description,
    user: user,
    id: id,
    voteCount:  (voteCount + 1),
    dateTime: dateTime
  }
}

export const downVote = (post) => {
  const { comment, description, user, id, voteCount, dateTime } = post;
  return {
    type: 'ADD_POST',
    comment: comment,
    description: description,
    user: user,
    id: id,
    voteCount:  (voteCount - 1),
    dateTime: dateTime
  }
}

