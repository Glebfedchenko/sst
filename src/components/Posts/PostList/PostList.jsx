import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import AsyncPost from '../../Async/AsyncPost';

const preload = AsyncPost.preload();

const PostList = ({posts, users}) => (
  <div className="posts">
    {posts
      ? posts.map(p => (
          <div key={p.id} className="posts__container">
            <span>#{p.id}</span> &nbsp;
            <Link
              onMouseOver={() => preload}
              onFocus={() => preload}
              to={{
                pathname: `/posts/${p.id}`,
                state: {
                  userId: p.userId,
                  title: p.title,
                  body: p.body,
                  users,
                },
              }}
            >
              <div>{p.title}</div>
            </Link>
          </div>
        ))
      : null}
  </div>
);

PostList.defaultProps = {posts: undefined, users: undefined};

PostList.propTypes = {
  posts: PropTypes.arrayOf(Object),
  users: PropTypes.arrayOf(Object),
};

export default PostList;
