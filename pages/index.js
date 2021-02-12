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
        <div className='w-full h-auto place-self-start bg-dark flex flex-row justify-center'>
          <div className='w-1/2 flex flex-row-reverse pr-10'>
            <ParticleBrain />
          </div>
          <h1 className='w-1/2 text-6xl text-light self-center'>
            Your brain does a lot
            <br />
            Give it some help
            <br />
            With <span className='text-accent'>BudBud</span>
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
