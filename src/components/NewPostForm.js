import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";
import Container from 'react-bootstrap/Container';


function NewPostForm(props){
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    console.log("Comment:", event.target.comment);
    console.log("Value:", event.target.comment.value);
    props.onNewPostCreation({
      comment: event.target.comment.value, 
      description: event.target.description.value, 
      user: event.target.user.value, 
      id: v4(),
      voteCount: parseInt(1),
      dateTime: Date()
    });
  }
  //Where all new vars are started 
  return (
    <React.Fragment>
      
        <Container>
          
            <ReusableForm 
              formSubmissionHandler={handleNewPostFormSubmission}
              buttonText="Add Post!" />
          
        </Container>
      
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;
