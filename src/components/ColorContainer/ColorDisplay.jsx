function ColorDisplay({ hex, rgb }) {
  return (
    <div style={{ backgroundColor: hex }}>
      {hex} {rgb}
    </div>
  );
}

export default ColorDisplay;
