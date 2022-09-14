import * as actions from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('Help Queue actions', () => {
  it('deletePost should create DELETE_POST action', () => {
    expect(actions.deletePost(1)).toEqual({
      type: c.DELETE_POST,
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
  it('addPost should create ADD_POST action', () => {
    expect(actions.addPost({
      comment: 'Mr. Boat',
      description: 'Named after my dad',
      user: 'user22',
      id: 2,

    })).toEqual({
      type: c.ADD_POST,
      comment: 'Mr. Boat',
      description: 'Named after my dad',
      user: 'user22',
      id: 2,
    });
  });
});