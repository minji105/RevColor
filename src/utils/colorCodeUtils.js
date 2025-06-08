export function getHexColor([r, g, b]) {
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

export function getRgbColor([r, g, b]) {
  return `rgb(${r.toString().padStart(3, '0')}, ${g.toString().padStart(3, '0')}, ${b.toString().padStart(3, '0')})`;
}
