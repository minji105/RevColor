import ColorDisplay from './ColorDisplay';
import { useColor } from '../../context/colorContext';
import { getComplementaryColor } from '../../utils/complementaryUtils';
import {
  getHexColor,
  getRgbColor,
  hexToRgbArray,
} from '../../utils/colorCodeUtils';

function ColorContainer() {
  const { color } = useColor();

  const originRgbArray = hexToRgbArray(color);
  const originHex = getHexColor(originRgbArray);
  const originRgb = getRgbColor(originRgbArray);

  const compleRgbArray = getComplementaryColor(color);
  const compleHex = getHexColor(compleRgbArray);
  const compleRgb = getRgbColor(compleRgbArray);

  return (
    <div className="flex">
      <ColorDisplay hex={originHex} rgb={originRgb} />
      <ColorDisplay hex={compleHex} rgb={compleRgb} />
    </div>
  );
}

export default ColorContainer;
