import { useColor } from '../../context/colorContext';
import ColorPicker from './ColorPicker';

function Toolbar() {
  const { color, setColor } = useColor();

  return (
    <div className="px-4 border-b">
      <ColorPicker color={color} onChange={setColor} />
    </div>
  );
}

export default Toolbar;
