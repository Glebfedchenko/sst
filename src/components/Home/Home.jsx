import React from 'react';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Home = () => (
  <div className="home">
    <div className="home__start">
      <Fade left>
        <Link to="/posts">START</Link>
      </Fade>
    </div>
  </div>
);

export default Home;
