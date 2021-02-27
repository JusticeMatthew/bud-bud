import React from 'react';
import Head from 'next/head';

import useUser from '../../hooks/useUser';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoadingProfile from '../../components/LoadingProfile';
import ProfileError from '../../components/ProfileError';

export default function UserProfile() {
  const { user, isLoading, isError } = useUser();

  if (isLoading) {
    return <LoadingProfile />;
  }

  if (isError && !isLoading) {
    return <ProfileError />;
  }

  return (
    <div className='container'>
      <Head>
        <title>{`${user.name}'s Buds`}</title>
      </Head>
      <Header />
      <main className='flex-grow w-full flex justify-center'>
        <div className='w-2/3 flex flex-col justify-center items-center'>
          Welcome {user.name}
        </div>
      </main>
      <Footer />
    </div>
  );
}
