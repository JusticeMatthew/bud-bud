import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import useUser from '../../hooks/useUser';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function UserProfile() {
  const router = useRouter();
  const { user, isLoading, isError } = useUser(router.query.user);

  return (
    <div className='container'>
      <Head>
        <title>{user.username}'s Buds</title>
      </Head>
      <Header />
      <main className='flex-grow w-full flex justify-center'>
        <div className='w-2/3 flex justify-center items-center'>
          <h2>{user ? JSON.stringify(user) : 'You need to register'}</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}
