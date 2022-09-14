import * as actions from './../../actions';

describe('Help Queue actions', () => {
  it('deleteTicket should create DELETE_POST action', () => {
    expect(actions.deletePost(1)).toEqual({
      type: 'DELETE_POST',
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addTicket should create ADD_POST action', () => {
    expect(actions.addPost({
      comment: 'Mr. Boat',
      description: 'Named after my dad',
      user: 'user22',
      id: 2,

    })).toEqual({
      type: 'ADD_POST',
      comment: 'Mr. Boat',
      description: 'Named after my dad',
      user: 'user22',
      id: 2,
    });
  });
});