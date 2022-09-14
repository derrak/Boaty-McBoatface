import formVisibleReducer from './form-visible-reducer';
import postListReducer from './post-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
//  state slice : the reducer that handles actions related to that state slice
  formVisibleOnPage: formVisibleReducer,
  mainPostList: postListReducer
});

export default rootReducer;