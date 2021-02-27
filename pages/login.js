import Head from 'next/head';
import { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

export default function Login() {
  const [loginError, setLoginError] = useState('');
  return (
    <div className='container'>
      <Head>
        <title>Bud-Bud Login</title>
      </Head>
      <Header />
      <main className='flex-grow w-full flex justify-center'>
        <div
          className={`w-2/3 flex items-center flex-col ${
            !loginError && 'justify-center'
          }`}
        >
          {loginError && (
            <div className='bg-dark text-light rounded w-64 h-16 m-16 border-red-600 border-2 flex justify-center items-center'>
              <h2 className='p-6 text-center text-red-600'>{loginError}</h2>
            </div>
          )}
          <LoginForm setLoginError={setLoginError} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
