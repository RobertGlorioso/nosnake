export const bgWidth = window.innerWidth;
export const bgHeight = window.innerHeight;

export const snakeMaker = function() { return Array(50).fill({x:100,y:0},0,50); }

export const inits = {
  mPosition : {x:0,y:0},
  sPosition : [{snake : new snakeMaker(), snakeDir : {x:1,y:1}}],
  mDead : false,
  score : 0
};
