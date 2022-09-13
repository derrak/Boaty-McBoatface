import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.postList.sort((a, b) => b.voteCount - a.voteCount).map((post) =>
       
        <Post 
          whenPostClicked={props.onPostSelection}
          comment={post.comment}
          user={post.user}
          voteCount={post.voteCount}
          
          whenUpVoteClicked={props.onPostUpVote}
          id={post.id}
          key={post.id}/>
          )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func,
  onPostUpVote: PropTypes.func
};

export default PostList;

