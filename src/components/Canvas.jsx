import React from 'react';
import BG from './BG';
import Mouse from './Mouse';
import Snakes from './Snake';
import PropTypes from 'prop-types';

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, window.innerHeight / -2, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="main-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={ props.trackMouse }
      viewBox={ viewBox }
    >
      <BG />
      <Mouse position={ props.mPosition } />
      <Snakes position={ props.sPosition } />
    </svg>
  );
};

Canvas.defaultProps = {
  mPosition : { x: 0, y: 0},
  sPosition : [[{ x: 0, y: 0}]],
  isMouseDead : false,
}

Canvas.propTypes = {
  mPosition: PropTypes.object.isRequired,
  sPosition: PropTypes.array.isRequired,
  isMouseDead: PropTypes.bool.isRequired

}
export default Canvas;