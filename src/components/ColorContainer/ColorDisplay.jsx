function ColorDisplay({ hex, rgb }) {
  return (
    <div
      style={{ backgroundColor: hex }}
      className="w-[50vw] p-4 flex flex-col gap-4"
    >
      <p className="text-8xl">{hex}</p>
      <p className="text-6xl mb-4">{rgb}</p>
      <p className="text-5xl font-black">--Color Name--</p>
      <p className="text-3xl">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p className="text-2xl">abcdefghijklmnopqrstuvwxyz</p>
      <p className="text-xl underline italic">
        Color names may not be entirely accurate.
      </p>
      <p>
        &nbsp;Once when I was six years old I saw a magnificent picture in a
        book, called True Stories from Nature, about the primeval forest. It was
        a picture of a boa constrictor in the act of swallowing an animal. Here
        is a copy of the drawing.
        <br />
        &nbsp;In the book it said: "Boa constrictors swallow their prey whole,
        without chewing it. After that they are not able to move, and they sleep
        through the six months that they need for digestion."
        <br />
        &nbsp;I pondered deeply, then, over the adventures of the jungle. And
        after some work with a colored pencil I succeeded in making my first
        drawing. My Drawing Number One. It looked something like this:
        <br />
        &nbsp;I showed my masterpiece to the grown-ups, and asked them whether
        the drawing frightened them.
        <br />
        &nbsp;But they answered: "Frighten? Why should any one be frightened by
        a hat?"
      </p>
    </div>
  );
}

export default ColorDisplay;
