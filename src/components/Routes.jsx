import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import Home from './Async/AsyncHome';
import Posts from './Async/AsyncPosts';
import Post from './Posts/Post/Post';

const Routes = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={Post} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
