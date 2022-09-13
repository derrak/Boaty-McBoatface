import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewPostForm(props){
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      comment: event.target.comment.value, 
      description: event.target.description.value, 
      user: event.target.user.value, 
      id: v4(),
      voteCount: parseInt(1),
      dateTime: Date()
    });
  }
  console.log(Date().split(" ").splice(0, 5, "").join(" "));
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Add Post!" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;
