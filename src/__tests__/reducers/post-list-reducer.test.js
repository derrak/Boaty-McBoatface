
import postListReducer from '../../reducers/post-list-reducer';
import { v4 } from 'uuid';
import * as c from './../../actions/ActionTypes';
import { formatDistanceToNow } from 'date-fns';

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
    timeOpen: new Date(),
    dateTime: Date(),
    relativeTimeDistance: formatDistanceToNow(new Date(), {
      addSuffix: true
    }),
    //id: 1
  };
  


  

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new post data to mainPostList', () => {
    const { comment, description, user, id, voteCount, dateTime, relativeTimeDistance, timeOpen } = postData;
    action = {
        type: c.ADD_POST,
        comment: comment,
        description: description,
        user: user,
        id: id,
        voteCount: voteCount,
        dateTime: dateTime,
        timeOpen: timeOpen,
        relativeTimeDistance: relativeTimeDistance
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        comment: comment,
        description: description,
        user: user,
        id: id,
        voteCount: voteCount,
        dateTime: dateTime,
        timeOpen: timeOpen,
        relativeTimeDistance: 'less than a minute ago'

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

  const testData = {
    comment: 'Boaty McBoatface',
    description: 'A classic internet name',
    user: 'user007', 
    // dateTime: Date(),
    timeOpen: new Date(),
    relativeTimeDistance: formatDistanceToNow(new Date(), {
      addSuffix: true
    }),
    id: 1
  }

  test('Should add a formatted wait time to ticket entry', () => {
    const { comment, description, user, id, voteCount, dateTime, timeOpen } = testData;
    action = {
      type: c.UPDATE_TIME,
      relativeTimeDistance: '4 minutes ago',
      id: id
    };
    expect(postListReducer({ [id]: testData }, action)).toEqual({
      [id]: {
        comment: comment,
        description: description,
        user: user,
        id: id,
        // voteCount: voteCount,
        // dateTime: dateTime,
        timeOpen: timeOpen,
        relativeTimeDistance: '4 minutes ago'
      }
    });
  });
});