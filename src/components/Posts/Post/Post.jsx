import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';
import PropTypes from 'prop-types';
import * as actions from '../../../redux/actions/data';
import Comments from './Comments/Comments';
import User from './User/User';

const Post = ({location, comments}) => {
  const {state} = location;
  const {body, title, users, userId} = state;
  const userDetails = users.filter(u => u.id === userId);
  return (
    <div className="post">
      <div className="post__info">
        <h1>Post Information</h1>
        <div className="post__info__details">
          <div>Name: {title}</div>
          <div>Text: {body}</div>
        </div>
      </div>
      <div className="post__comments">
        <h1>Comments</h1>
        {comments
          ? comments.map(comment => (
              <Comments comment={comment} key={comment.id} />
            ))
          : null}
      </div>
      <div className="post__user">
        <h1>user details</h1>
        {userDetails.map(details => (
          <User details={details} key={details.id} />
        ))}
      </div>
    </div>
  );
};

Post.defaultProps = {comments: undefined};

Post.propTypes = {
  location: PropTypes.objectOf(Object).isRequired,
  comments: PropTypes.arrayOf(Object),
};

export default compose(
  connect(
    state => ({comments: state.data.comments}),
    dispatch => ({getComments: id => dispatch(actions.getComments(id))}),
  ),
  lifecycle({
    componentDidMount() {
      this.props.getComments(this.props.match.params.id);
    },
  }),
  withRouter,
)(Post);
