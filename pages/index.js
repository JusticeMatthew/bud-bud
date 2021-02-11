import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Bud-Bud</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='flex w-full h-16 bg-gray-900 text-gray-100 justify-between items-end'>
        <div className='m-3'>Header</div>
        <nav className='m-3'>test</nav>
      </header>
      <main className='flex-grow'>
        <h1 className='text-6xl'>
          Home Page
          <br /> Login{' '}
          <Link href='/login'>
            <a>HERE</a>
          </Link>
        </h1>
      </main>
      <footer className='flex w-full h-14 bg-gray-900 text-gray-100 justify-center items-center'>
        Footer
      </footer>
    </div>
  );
}
