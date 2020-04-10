export const getCanvasPosition = (event) => {
  const svg = document.getElementById('main-canvas');
  const point = svg.createSVGPoint();

  point.x = event.clientX;
  point.y = event.clientY;
  const p = point.matrixTransform(svg.getScreenCTM().inverse());
  return p;
};
