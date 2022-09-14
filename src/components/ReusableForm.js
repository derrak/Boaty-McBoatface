import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control as='input' type='text' placeholder='Comment' name='comment'></Form.Control> 
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder='Description' name='description' ></Form.Control>
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label>User</Form.Label>
          <Form.Control as='input' type='text' placeholder='Username' name="user"></Form.Control>
        </Form.Group>
        
        <br></br>
        <Button variant="primary" type="submit">{props.buttonText}
        </Button>
      </form>
    </React.Fragment>
  );
}
{/* <form onSubmit={props.formSubmissionHandler}>
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
</form> */}
ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;