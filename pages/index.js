import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBrain from '../components/ParticleBrain';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Bud-Bud</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='flex-grow ml-auto bg-main bg-repeat w-full flex flex-col items-center'>
        <div className='w-full h-auto place-self-start bg-dark flex sm:flex-row justify-center flex-col items-center pb-7'>
          <div className='sm:w-1/2 sm:flex sm:flex-row-reverse sm:pr-10 h-auto'>
            <ParticleBrain />
          </div>
          <h1 className='text-3xl text-light text-center self-center md:w-1/2 lg:text-5xl sm:text-left'>
            Your brain does a lot
            <br />
            Give it some help
            <br />
            With <span className='text-accent'>BudBud</span>
          </h1>
        </div>
        <button className='w-60 h-16 font-bold subpixel-antialiased bg-accent text-dark text-xl m-2 transition-all duration-200 hover:bg-dark hover:text-light ease-linear transform '>
          Sign up for Free
        </button>
      </main>
      <Footer />
    </div>
  );
}
