
import postListReducer from '../../reducers/post-list-reducer';
import { v4 } from 'uuid';
import * as c from './../../actions/ActionTypes';

describe('postListReducer', () => {

  let action;

  const currentState = {
    1: {
      comment: 'Swimmy', 
      description: 'just because', 
      user: 'userName_09', 
      voteCount: 1,
      dateTime: Date(),
      id: 1 
    }, 2: {
      comment: 'Mr. Boat', 
      description: 'Named after my dad', 
      user: 'user22', 
      id: 2,
      voteCount: 1,
      dateTime: Date()
    }
  }

  const postData = {
    comment: 'Boaty McBoatface', 
    description: 'A classic internet name', 
    user: 'user007', 
    id: v4(),
    voteCount: 1,
    dateTime: Date()
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to mainPostList', () => {
    const { comment, description, user, id, voteCount, dateTime } = postData;
    action = {
        type: c.ADD_POST,
        comment: comment,
        description: description,
        user: user,
        id: id,
        voteCount: voteCount,
        dateTime: dateTime
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        comment: comment,
        description: description,
        user: user,
        id: id,
        voteCount: voteCount,
        dateTime: dateTime
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
      type: c.DELETE_POST,
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {
        comment: 'Mr. Boat',
        description: 'Named after my dad',
        user: 'user22',
        id: 2,
        voteCount: 1,
        dateTime: Date()
      }
    });
  });

});