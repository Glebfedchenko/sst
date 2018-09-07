import React from 'react';
import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions/data';
import PostList from './PostList/PostList';

const Posts = ({posts, users, search, searchValue, history}) => (
  <div className="posts">
    <h1>Search for your post</h1>
    <div className="posts__input">
      <input
        type="text"
        value={searchValue}
        placeholder="Please enter post name"
        onChange={e => search(e.target.value)}
      />
      <button type="button" onClick={history.goBack}>
        GO BACK
      </button>
    </div>
    <PostList users={users} posts={posts} />
  </div>
);

Posts.defaultProps = {posts: undefined, users: undefined};

Posts.propTypes = {
  posts: PropTypes.arrayOf(Object),
  users: PropTypes.arrayOf(Object),
  history: PropTypes.objectOf(Object).isRequired,
  search: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default compose(
  connect(
    state => ({
      posts: state.data.posts.filter(post =>
        post.title.includes(state.data.searchValue),
      ),
      users: state.data.users,
      searchValue: state.data.searchValue,
    }),
    dispatch => ({
      getPosts: () => dispatch(actions.getPosts()),
      getUsers: () => dispatch(actions.getUsers()),
      search: value => dispatch(actions.serchPosts(value)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      this.props.getPosts();
      this.props.getUsers();
    },
  }),
)(Posts);
