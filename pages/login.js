import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function Login() {
  return (
    <div className='container'>
      <Head>
        <title>Bud-Bud Login</title>
      </Head>
      <h1>LOGIN PAGE</h1>
      <h2>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </h2>
      <Image
        src='/images/profile.jpg'
        height={144}
        width={144}
        alt='Jesse Justice'
      />
    </div>
  );
}
