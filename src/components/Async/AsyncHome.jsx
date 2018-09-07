import Loadable from 'react-loadable';
import Loading from './Loading';

const AsyncHome = Loadable({
  loader: () => import('../Home/Home'),
  loading: Loading,
  timeout: 3000,
});
export default AsyncHome;
