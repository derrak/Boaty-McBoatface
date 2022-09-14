import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import EditPostForm from './EditPostForm';
import PostDetail from './PostDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleUpVote = (postId) => {
    const selectedPost = this.props.mainPostList[postId];
    const { id, comment, description, user, voteCount, dateTime } = selectedPost;
    const { dispatch } = this.props;
    const action = {
      type: 'ADD_POST',
      id: id,
      comment: comment,
      description: description,
      user: user,
      voteCount: (voteCount + 1),
      dateTime: dateTime
    }
    dispatch(action)
    this.setState({ selectedPost: null })
  }

  
  handleDownVote = (postId) => {
    const selectedPost= this.props.mainPostList[postId];
    const { id, comment, description, user, voteCount, dateTime } = selectedPost;
    const { dispatch } = this.props;
    const action = {
      type: 'ADD_POST',
      id: id,
      comment: comment,
      description: description,
      user: user,
      voteCount: (voteCount - 1),
      dateTime: dateTime
    }
    dispatch(action)
    this.setState({selectedPost: null})
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, comment, description, user, voteCount, dateTime } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      comment: comment,
      description: description,
      user: user,
      voteCount: voteCount,
      dateTime: dateTime
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, comment, description, user, voteCount, dateTime} = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      comment: comment,
      description: description,
      user: user,
      voteCount: voteCount,
      dateTime: dateTime
      
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }
  
  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditPostForm 
      post = {this.state.selectedPost} 
      onEditPost = {this.handleEditingPostInList} />
      buttonText = "Return to Post List";
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail 
      post={this.state.selectedPost} 
      onClickingDelete={this.handleDeletingPost}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Post List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm 
      onNewPostCreation={this.handleAddingNewPostToList}/>;
      buttonText = "Return to Post List"; 
    } else {
      currentlyVisibleState = <PostList 
      onPostSelection={this.handleChangingSelectedPost} 
      postList={this.props.mainPostList} 
      onPostUpVote={this.handleUpVote}
      onPostDownVote={this.handleDownVote}/>;
      buttonText = "Add Post"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

PostControl.propTypes = {
  mainPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return{
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
};

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;

