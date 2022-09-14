import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPostForm (props) {
  const { post } = props;

  // function handleEditPostFormSubmission(event) {
  //   event.preventDefault();
  //   props.onEditPost({
  //     comment: event.target.comment.value, 
  //     description: event.target.description.value, 
  //     user: event.target.user.value, 
  //     id: post.id,
  //     voteCount: post.voteCount
  //   });
  // }
  function handleEditPostFormSubmission(event) {
    event.preventDefault();

let editedComment = ""
if (event.target.comment.value === "") {
  editedComment = post.comment;
} else {
  editedComment = event.target.comment.value
}

let editedDescription = ""
if (event.target.description.value === "") {
  editedDescription = post.description;
} else {
  editedDescription = event.target.description.value
}

let editedUser = ""
if (event.target.user.value === "") {
  editedUser = post.user;
} else {
  editedUser = event.target.user.value
}

    props.onEditPost({
      comment: editedComment,
      description: editedDescription, 
      user: editedUser, 
      id: post.id,
      voteCount: post.voteCount,
      dateTime: post.dateTime
    });
}

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditPostFormSubmission} 
        buttonText="Update Post" />
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  onEditPost: PropTypes.func,
  post: PropTypes.object
};

export default EditPostForm;
