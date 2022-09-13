import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
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
          dateTime={post.dateTime}
          whenUpVoteClicked={props.onPostUpVote}
          whenDownVoteClicked={props.onPostDownVote}
          id={post.id}
          key={post.id}/>
          )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func,
  onPostUpVote: PropTypes.func,
  onPostDownVote: PropTypes.func
};

export default PostList;

