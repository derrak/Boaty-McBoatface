import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import EditPostForm from './EditPostForm';
import PostDetail from './PostDetail';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: [],
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleDeletingPost = (id) => {
    const newMainPostList = this.state.mainPostList.filter(post => post.id !== id);
    this.setState({
      mainPostList: newMainPostList,
      selectedPost: null
    });
  }
  handleUpVote = (id) => {
    const selectedPost = this.state.mainPostList.filter(post => post.id === id)[0];
    const editedMainPostList = this.state.mainPostList.filter(post => post.id !== id);
    const upVote = (selectedPost) => {
      return {
      ...selectedPost,
      voteCount: selectedPost.voteCount + 1
      }
    };
    const updatedPost = upVote(selectedPost);
    console.log("Updated Post: ", updatedPost);
    const lastPostList = editedMainPostList.concat(updatedPost);
    console.log("lastPostList: ", lastPostList);
    this.setState({
        mainPostList: lastPostList,
        selectedPost: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingPostInList = (postToEdit) => {
    const editedMainPostList = this.state.mainPostList
      .filter(post => post.id !== this.state.selectedPost.id)
      .concat(postToEdit);
    this.setState({
      mainPostList: editedMainPostList,
      editing: false,
      selectedPost: null
    });
  }

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({mainPostList: newMainPostList});
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.mainPostList.filter(post => post.id === id)[0];
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
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>;
      buttonText = "Return to Post List"; 
    } else {
      currentlyVisibleState = <PostList 
      onPostSelection={this.handleChangingSelectedPost} 
      postList={this.state.mainPostList} 
      onPostUpVote={this.handleUpVote}/>;
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

export default PostControl;

