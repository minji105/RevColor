export function getComplementaryColor(color) {
  color = color.replace('#', '');

  const r = 255 - parseInt(color.slice(0, 2), 16);
  const g = 255 - parseInt(color.slice(2, 4), 16);
  const b = 255 - parseInt(color.slice(4, 6), 16);

  return [r, g, b];
}
