import Loadable from 'react-loadable';
import Loading from './Loading';

const AsyncPost = Loadable({
  loader: () => import('../Posts/Post/Post'),
  loading: Loading,
});
export default AsyncPost;
