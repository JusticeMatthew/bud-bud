import Link from 'next/link';

import useUser from '../hooks/useUser';
import { HeaderButton, HeaderLogoutButton } from './HeaderButtons';

export default function Header() {
  const { user, isError } = useUser();

  return (
    <header className='flex w-full h-18 bg-dark opacity-1 justify-between items-center'>
      <Link href='/'>
        <a>
          <div className='flex m-4'>
            <img height={45} width={45} src='/images/heart.png' />
            <h2 className='ml-4 text-4xl text-light font-sans'>BudBud</h2>
          </div>
        </a>
      </Link>
      <div className='m-2 self-center flex flex-col sm:flex-row'>
        {user && !isError ? (
          <>
            <Link href={`/profile/${user.username}`}>
              <a className='m-2'>
                <HeaderButton text='Profile' />
              </a>
            </Link>
            <Link href='/login'>
              <a className='m-2'>
                <HeaderLogoutButton text='Logout' />
              </a>
            </Link>
          </>
        ) : (
          <>
            <Link href='/signup'>
              <a className='m-2'>
                <HeaderButton text='Sign up' />
              </a>
            </Link>
            <Link href='/login'>
              <a className='m-2'>
                <HeaderButton text='Login' />
              </a>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
