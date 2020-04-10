import React from 'react';
import PropTypes from 'prop-types';

const Snakes = (props) => {
  const sps = props.position;
  const returnSnake = (sp) => {
    const snake = sp.snake.map((i) => 
      <SnakePiece position={ i } />
    );
    return ( snake.reverse() )
  }
return ( sps.map(returnSnake) )
}

const SnakePiece = (props) => {
  const pieceStyle = {
    fill: '#611111',
    stroke: '#999999',
    strokeWidth: 8
  }
  return (
      <ellipse
      id="snkpc"
      style={pieceStyle}
      cx={props.position.x}
      cy={props.position.y}
      rx="18"
      ry="18"
      ></ellipse>
  );
}

Snakes.defaultProps = {
  position : [[{x: 0, y: 0}]]
}

Snakes.propTypes = {
  position: PropTypes.array.isRequired
};
  
export default Snakes;
