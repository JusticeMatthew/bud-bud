import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Bud-Bud</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='flex-grow bg-main bg-repeat w-full flex flex-col items-center'>
        <div className='h-60 w-full place-self-start bg-dark flex justify-center items-center'>
          <h1 className='text-6xl text-light'>Home Page</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
