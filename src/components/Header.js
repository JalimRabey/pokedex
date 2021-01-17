import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (document) {
      const html = document.querySelector('html');
      html.classList.toggle('dark');
      setDarkMode(!darkMode);
    }
  };

  return (
    <header className="container mx-auto mb-6 flex items-center max-w-xl">
      <Link href="/">
        <a
          className="flex items-center transition hover:opacity-75 duration-500"
          title="Home page"
        >
          <Image
            src="/logo-192x192.png"
            alt="Pokemon logo"
            layout="fixed"
            width="60"
            height="60"
          />
          <h1 className="text-4xl font-extrabold ml-2 dark:text-white">
            Pokedex
          </h1>
        </a>
      </Link>

      <button
        className="ml-auto mr-4 transition hover:opacity-75 duration-500"
        onClick={toggleDarkMode}
      >
        <Image
          src={darkMode ? '/sun.svg' : '/moon.svg'}
          alt={darkMode ? 'Sun' : 'Moon'}
          layout="fixed"
          width="35"
          height="35"
        />
      </button>
    </header>
  );
};

export default Header;
