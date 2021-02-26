import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import useUser from '../../hooks/useUser';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';

export default function UserProfile() {
  const router = useRouter();
  const { user, isLoading, isError } = useUser(router.query.userProfile);

  return (
    <div className='container'>
      <Head>
        <title>{/* put a spinner here :)*/}'s Buds</title>
      </Head>
      <Header />
      <main className='flex-grow w-full flex justify-center'>
        <div className='w-2/3 flex justify-center items-center'>
          {user ? (
            <>Welcome Back</>
          ) : isLoading ? (
            <>Spinner goes here</>
          ) : (
            <>
              <LoginForm />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
