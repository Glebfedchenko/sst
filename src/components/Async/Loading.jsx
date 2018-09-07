import React from 'react';
import Spinner from 'react-svg-spinner';
import PropTypes from 'prop-types';

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

const Loading = ({timedOut, pastDelay, error, retry}) => (
  <div style={styles}>
    {error ? (
      <div>
        Error!
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    ) : null}
    {timedOut ? (
      <div>
        Taking a long time...
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    ) : null}
    {pastDelay ? <Spinner size="300px" color="#5488AC" speed="fast" /> : null}
  </div>
);

Loading.defaultProps = {
  error: null,
};

Loading.propTypes = {
  timedOut: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  retry: PropTypes.func.isRequired,
};
export default Loading;
