import React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';

export default function ProfileError() {
  return (
    <div className='container'>
      <Head>
        <title>Oops</title>
      </Head>
      <Header />
      <main className='flex-grow w-full flex justify-center'>
        <div className='w-2/3 flex flex-col items-center'>
          <div className='bg-dark text-light rounded w-64 h-16 m-20 border-red-600 border-2 flex justify-center items-center'>
            <h2 className='text-center text-red-600'>
              Looks like your session has expired
              <br />
              Please log in again
            </h2>
          </div>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
