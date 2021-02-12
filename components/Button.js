export default function Button({ text }) {
  return (
    <>
      <button className='font-bold subpixel-antialiased bg-accent text-dark w-24 h-8 text-lg m-2 transition-transform duration-200 hover:bg-light hover:text-dark ease-linear transform hover:scale-105'>
        {text}
      </button>
    </>
  );
}
