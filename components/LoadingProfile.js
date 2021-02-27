import React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import Spinner from './Spinner';

export default function LoadingProfile() {
  return (
    <div className='container'>
      <Head>
        <title>Loading Buds</title>
      </Head>
      <Header />
      <main className='flex-grow w-full flex justify-center'>
        <div className='w-2/3 h-auto flex justify-center items-center'>
          <Spinner />
        </div>
      </main>
      <Footer />
    </div>
  );
}
