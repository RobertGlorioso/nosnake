import React from 'react';
import PropTypes from 'prop-types';

const Scores = (props) => {
  return(<div>Mouse Score: {props.score}</div>);
}

Scores.defaultProps = {
  score : 0
}

Scores.propTypes = {
  score : PropTypes.number.isRequired
}

export default Scores;