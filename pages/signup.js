import Head from 'next/head';
import { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';

export default function Signup() {
  const [signupError, setSignupError] = useState('');
  return (
    <div className='container'>
      <Head>
        <title>Bud-Bud Signup</title>
      </Head>
      <Header />
      <main className='flex-grow w-full flex justify-center'>
        <div
          className={`w-2/3 flex items-center flex-col ${
            !signupError && 'justify-center'
          }`}
        >
          {signupError && (
            <div className='bg-dark text-light rounded w-64 h-16 m-10 border-red-600 border-2 flex justify-center items-center'>
              <h2 className='p-6 text-center text-red-600'>{signupError}</h2>
            </div>
          )}
          <SignupForm setSignupError={setSignupError} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
