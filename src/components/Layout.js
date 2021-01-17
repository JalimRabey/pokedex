import Head from 'next/head';

import Header from './Header';

const Layout = ({ title = 'Pokedex', children }) => {
  return (
    <div className="bg-gray-300 dark:bg-gray-800 pt-8 pb-8">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto max-w-xl  min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
