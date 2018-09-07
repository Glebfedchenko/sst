import Loadable from 'react-loadable';
import Loading from './Loading';

const AsyncPosts = Loadable({
  loader: () => import('../Posts/Posts'),
  loading: Loading,
});
export default AsyncPosts;
