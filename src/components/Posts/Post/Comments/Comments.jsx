import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({comment}) => {
  const {name, body, email} = comment;
  return (
    <div className="post__comments__details">
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Text: {body}</div>
    </div>
  );
};
Comments.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};
export default Comments;
