import Link from 'next/link';

import Button from './Button';

export default function Header() {
  return (
    <header className='flex w-full h-18 bg-dark opacity-1 justify-between items-center'>
      <Link href='/'>
        <a>
          <div className='flex m-4'>
            <img height={45} width={45} src='/images/heart.png' />
            <h2 className='ml-4 text-4xl text-light font-san'>BudBud</h2>
          </div>
        </a>
      </Link>
      <div className='m-2 self-center flex flex-col sm:flex-row'>
        <Button text='Sign up' />
        <Link href='/login'>
          <a>
            <Button text='Login' />
          </a>
        </Link>
      </div>
    </header>
  );
}
