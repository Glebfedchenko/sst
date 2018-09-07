import * as actions from '../actions/data';

export const data = (
  state = {searchValue: '', posts: [], users: [], comments: []},
  action,
) => {
  switch (action.type) {
    case actions.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case actions.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case actions.GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case actions.SEARCH:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};
