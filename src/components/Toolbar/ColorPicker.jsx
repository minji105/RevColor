import { useColor } from '../../context/ColorContext';

function ColorPicker() {
  const { color } = useColor();
  return <div>{color}</div>;
}

export default ColorPicker;
