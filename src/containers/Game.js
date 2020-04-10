//import { moveSnakes, moveMouse } from '../actions/index';
import { bgWidth, bgHeight } from '../utils/constants';

export const mouseDead = state => {
  const snakePosArray = state.sPosition;
  const mousePos = state.mPosition;
  const mouseBeenDied = state.mDead;
  if (!mouseBeenDied) {
    const mouseDied = snakePosArray.find((sps) => {
      return sps.snake.find((sp) => {
        return (Math.hypot(sp.x - mousePos.x, sp.y - mousePos.y) < 30);
      }) !== undefined;
    });
    return mouseDied !== undefined;
  } else return true
}

export const snakeCtrl = state => {
  const snakePosArray = state.snake;
  const spx = snakePosArray[0].x;
  const spy = snakePosArray[0].y;
  let newSnakeDir = state.snakeDir;

  snakePosArray.unshift({
    x : spx + 30*(0.5 - state.snakeDir.x),
    y : spy + 30*(0.5 - state.snakeDir.y)
  });

  snakePosArray.pop();

  if ( spx > bgWidth / 2 ) { 
    snakePosArray.fill( {x: bgWidth / 2, y: snakePosArray[0].y }, 0, 1);
    newSnakeDir = {x: state.snakeDir.x *= -1, y: state.snakeDir.y };
  };
  if ( spx < bgWidth / -2 ) { 
    snakePosArray.fill( {x: bgWidth / -2, y: snakePosArray[0].y }, 0, 1);
    newSnakeDir = {x: state.snakeDir.x *= -1, y: state.snakeDir.y };
  };
  if ( spy > bgHeight / 2 ) { 
    snakePosArray.fill( {x: snakePosArray[0].x, y: bgHeight / 2 }, 0, 1);
    newSnakeDir = {x: state.snakeDir.x, y: state.snakeDir.y *= -1 };
  };
  if ( spy < bgHeight / -2 ) { 
    snakePosArray.fill( {x: snakePosArray[0].x, y: bgHeight / -2 }, 0, 1);
    newSnakeDir = {x: state.snakeDir.x, y: state.snakeDir.y *= -1 };
  };
  let returnObj;
  returnObj = {snake : snakePosArray, snakeDir : newSnakeDir};
  return returnObj;
  
};

export const addSnake = state => {
  const snakePosArray = state.snake;
  if (snakePosArray.length < 100) {
    const lastSPiece = snakePosArray[snakePosArray.length - 1];
    snakePosArray.push({x: lastSPiece.x, 
                        y: lastSPiece.y 
                      });
  }
  return {snake: snakePosArray, snakeDir: state.snakeDir};
};

export const moveSnake = state => {
  const sdx = Math.random();
  const sdy = Math.random();
  const newSnakeDir = {x: sdx, y: sdy};
  return {snake: state.snake, snakeDir: newSnakeDir};
};
