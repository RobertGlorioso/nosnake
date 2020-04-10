import React from 'react';
import { bgWidth, bgHeight, inits } from '../utils/constants';
import PropTypes from 'prop-types';

class Restart extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {isMouseDead: props.isMouseDead};
    this.initState = this.initState.bind(this);
  };
  
  initState = (e) => { 
    //console.log("restarted");
    this.setState(inits);
  };
  render() { 
    let restartStyle;
    if (this.state.isMouseDead) {
      restartStyle = {
        fill: '#11aa0044',
      };
    } else {
      restartStyle = {
        fill: '#336699aa',
      };
    }
    return <rect
      onClick={ this.initState }
      style={restartStyle}
      x={0}
      y={100}
      width={150}
      height={40}
    ></rect>
  };
};


Restart.defaultProps = {
  isMouseDead : true
}

Restart.propTypes = {
  isMouseDead: PropTypes.bool.isRequired
}

export default Restart;