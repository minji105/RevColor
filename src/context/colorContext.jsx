import { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [color, setColor] = useState('#ffffff');

  return <ColorContext value={{ color, setColor }}>{children}</ColorContext>;
}

export function useColor() {
  return useContext(ColorContext);
}
