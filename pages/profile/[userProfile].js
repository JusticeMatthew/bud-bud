import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import useUser from '../../hooks/useUser';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';
import Spinner from '../../components/Spinner';

export default function UserProfile() {
  const router = useRouter();
  const { user, isLoading, isError } = useUser(router.query.userProfile);

  if (isLoading) {
    return (
      <div className='container'>
        <Head>
          <title>Loading Buds</title>
        </Head>
        <Header />
        <main className='flex-grow w-full flex justify-center'>
          <div className='w-2/3 flex justify-center items-center'>
            <Spinner />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isError && !isLoading) {
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

  return (
    <div className='container'>
      <Head>
        <title>{`${user.username}'s Buds`}</title>
      </Head>
      <Header />
      <main className='flex-grow w-full flex justify-center'>
        <div className='w-2/3 flex flex-col justify-center items-center'>
          Welcome {user.username}
        </div>
      </main>
      <Footer />
    </div>
  );
}
