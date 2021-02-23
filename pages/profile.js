import React from 'react';
import Head from 'next/head';

import useUser from '../hooks/useUser';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UserProfile() {
  const { user, isLoading, isError } = useUser('test');
  console.log(user, isError);
  return (
    <div className='container'>
      <Head>
        <title>Bud-Bud Profile</title>
      </Head>
      <Header />
      <main className='flex-grow w-full flex justify-center'>
        <div className='w-2/3 flex justify-center items-center'>
          <h2>TESTING</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}
