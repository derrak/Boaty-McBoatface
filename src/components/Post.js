import React from "react";
import PropTypes from "prop-types";

function Post(props){

  return (
    <React.Fragment>
      {/* <div onClick = {() => props.whenPostClicked(props.id)}> */}
      <div>
        <h3>{props.comment} - @{props.user}</h3>
        <p><em>Vote count: {props.voteCount}</em></p>
        <p>Uploaded: {props.dateTime}</p>
        <button onClick = {() => props.whenPostClicked(props.id)}>Edit Post</button>
        <button onClick = {() => props.whenUpVoteClicked(props.id)}>UpVote</button>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  comment: PropTypes.string,
  user: PropTypes.string,
  voteCount: PropTypes.number,
  id: PropTypes.string,
  dateTime: PropTypes.string,
  whenPostClicked: PropTypes.func,
  whenUpVoteClicked: PropTypes.func
}

export default Post;