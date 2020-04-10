export const MOVE_SNAKES = 'MOVE_SNAKES';
export const MOVE_MOUSE = 'MOVE_MOUSE';

export const moveSnakes = sPosition => ({
  type: MOVE_SNAKES,
  sPosition,
});

export const moveMouse = mPosition => ({
  type: MOVE_MOUSE,
  mPosition,
});