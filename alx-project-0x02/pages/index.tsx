import Head from 'next/head';
import Header from '../components/layout/Header';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>ALX Project 2</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Welcome to ALX Project 2</h1>
        <p className="text-lg">This is a simple Next.js app with TypeScript, Tailwind, and ESLint configured.</p>
      </main>
    </>
  );
}
