import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { moveSnake, addSnake, mouseDead, snakeCtrl } from './containers/Game';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './components/Canvas';
import Scores from './components/Scores';
import { bgWidth, bgHeight, inits, snakeMaker } from './utils/constants';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = inits;
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.initState = this.initState.bind(this);
  }
  
  initState = (e) => { 
    console.log("restarted");
    this.setState(inits);
    this.setState({
      sPosition : [{snake : new snakeMaker(), snakeDir : {x:1,y:1}}]
    })
  };

  handleMouseMove(event) {
    this.setState({
      mPosition : {x: getCanvasPosition(event).x,
                   y: getCanvasPosition(event).y }
    });
  };
  
  componentDidMount() {
    setInterval(() => {
      const snakePosArray = this.state.sPosition;
      const mouseDied = mouseDead(this.state);
      let currentScore = this.state.score;
      if(currentScore % 5000 === 0) {
        console.log("new snake added");
        snakePosArray.push({snake : new snakeMaker(),  snakeDir : {x:1,y:1}});
      }
      if(mouseDied) {
        this.setState({mDead: true});
      } else this.setState({sPosition : snakePosArray.map(sn => snakeCtrl(sn)), score : currentScore += 10 });
    }, 16)
    setInterval(() => {
      const snakePosArray = this.state.sPosition;
      let sp = snakePosArray.map(sn => moveSnake(sn));
      
      this.setState({
        sPosition : sp
      })
    }, 1000)
    setInterval(() => {
      const snakePosArray = this.state.sPosition;
      const sp = snakePosArray.map(sn => addSnake(sn));
      this.setState({
        sPosition : sp
      })
    }, 50)
  };

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {
    const isMouseDead = this.state.mDead;
    let restart;
    if (isMouseDead === true) {
      restart = <rect onClick={ this.initState.bind(this)  } x={bgWidth / -2} y={bgHeight / -2} height={40} width={150} >Mouse Died! Restart?</rect>;
    } else {
      restart = <rect hidden onClick={ this.initState.bind(this)  } x={bgWidth / -2} y={bgHeight / -2} height={40} width={150} >Mouse Died! Restart?</rect>;
    }
    return (
      <div onMouseMove={this.handleMouseMove}>
        <p hidden>The current mouse position is ({this.state.mPosition.x}, {this.state.mPosition.y})</p>
        <p hidden>The current snake position is ({this.state.sPosition[0].snake[0].x})</p>
        { restart }
        <Scores score={this.state.score}/>
        <Canvas 
          mPosition={this.state.mPosition}
          sPosition={this.state.sPosition}
          isMouseDead={this.state.mDead}
          trackMouse={event => (this.trackMouse(event))} 
        >
        </Canvas>

      </div>
    );
  }
}

App.defaultProps = {
  mDead : false,
  mPosition : {x: 0, y: 0},
  sPosition : [{snake: [{x: 0, y: 0}],snakeDir: {x: 1,y: 1}}],
  score : 0
}

App.propTypes = {
  mDead : PropTypes.bool.isRequired,
  sPosition : PropTypes.array.isRequired,
  mPosition : PropTypes.object.isRequired,
  score : PropTypes.number.isRequired
};

export default App;