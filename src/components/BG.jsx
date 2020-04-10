import React from 'react';
import { bgWidth, bgHeight } from '../utils/constants';

const BG = () => {
  const skyStyle = {
    fill: '#98abcd',
  };
  return (
    <rect
      id="bkgrd"
      style={skyStyle}
      x={bgWidth / -2}
      y={bgHeight / -2}
      width={bgWidth}
      height={bgHeight}
    />
  );
};

export default BG;