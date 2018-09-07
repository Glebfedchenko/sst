import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Link} from 'react-router-dom';

const User = ({details, history}) => {
  const {name, username, phone, website, email, address} = details;
  const {street, suite, city} = address;
  return (
    <div>
      <div className="post__user__details">
        <div>
          <div>Name: {name}</div>
          <div>Username: {username} </div>
          <div>Email: {email}</div>
          <div>Website: {website} </div>
        </div>
        <div>
          <div>Street: {street}</div>
          <div>Suite: {suite}</div>
          <div>City: {city}</div>
          <div>Phone: {phone}</div>
        </div>
      </div>
      <div className="post__return">
        <Link to="/">
          <button type="button">RETURN HOME</button>
        </Link>
        <button type="button" onClick={history.goBack}>
          GO BACK
        </button>
      </div>
    </div>
  );
};

User.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  history: PropTypes.objectOf(Object).isRequired,
};

export default withRouter(User);
