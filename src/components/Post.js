import React from "react";
import PropTypes from "prop-types";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function Post(props) {

  return (
    <React.Fragment>
      {/* <div onClick = {() => props.whenPostClicked(props.id)}> */}
      <Container>
      <div>
        <h3>{props.comment} - @{props.user}</h3>
        <p><em>Vote count: {props.voteCount}</em></p>
        <Row>
        <Col md={3}>
          <Button variant="primary" onClick={() => props.whenUpVoteClicked(props.id)}>UpVote</Button>
        </Col>
        <Col md={3}>
          <Button variant="danger" onClick={() => props.whenDownVoteClicked(props.id)}>DownVote</Button>
        </Col>
        <Col md={3}>
          <Button variant="secondary" onClick={() => props.whenPostClicked(props.id)}>Edit Post</Button>
        </Col>
        </Row>
        <hr />
      </div>
      </Container>
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
  whenUpVoteClicked: PropTypes.func,
  whenDownVoteClicked: PropTypes.func
}

export default Post;