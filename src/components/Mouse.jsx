import React from 'react';
import PropTypes from 'prop-types';

const Mouse = (props) => {
  const mouseStyle = {
    fill: '#f2a50a',
    stroke: '#eb9',
    strokeWidth: 2
  }
  return (
    <ellipse
      id="mouse"
      style={mouseStyle}
      cx={props.position.x}
      cy={props.position.y}
      rx="16"
      ry="16"
      ></ellipse>
  );
}

Mouse.defaultProps = {
  position : {x: 0, y: 0}
}

Mouse.propTypes = {
  position: PropTypes.object.isRequired
};
  
export default Mouse;
