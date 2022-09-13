import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='comment'
          placeholder='Comment' /> 
          <br></br>
        <textarea
          name='description'
          placeholder='Description/Reasoning' />
          <br></br>
        <input
          type='text'
          name='user'
          placeholder='User Name' />
          <br></br>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;