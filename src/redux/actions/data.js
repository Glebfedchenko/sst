import axios from 'axios';

export const GET_POSTS = `GET_POSTS`;
export const GET_USERS = `GET_USERS`;
export const GET_COMMENTS = `GET_COMMENTS`;
export const SEARCH = `SEARCH`;

const POST_URL = `https://jsonplaceholder.typicode.com/posts`;
const USER_URL = `https://jsonplaceholder.typicode.com/users`;
const COMMENT_URL = `https://jsonplaceholder.typicode.com/posts`;

export const getPosts = () => {
  const request = axios.get(POST_URL).then(res => res.data);
  return {
    type: GET_POSTS,
    payload: request,
  };
};

export const getUsers = () => {
  const request = axios.get(USER_URL).then(res => res.data);
  return {
    type: GET_USERS,
    payload: request,
  };
};
export const getComments = id => {
  const request = axios
    .get(`${COMMENT_URL}/${id}/comments`)
    .then(res => res.data);
  return {
    type: GET_COMMENTS,
    payload: request,
  };
};

export const serchPosts = value => ({
  type: SEARCH,
  payload: value,
});
