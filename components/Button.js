export default function Button({ text, width, height }) {
  return (
    <>
      <button
        className={`${!width ? 'w-24' : width} ${
          !height ? 'h-8' : height
        } font-bold subpixel-antialiased bg-accent text-dark text-lg m-2 transition-transform duration-100 hover:bg-light hover:text-dark ease-linear transform hover:scale-105`}
      >
        {text}
      </button>
    </>
  );
}
