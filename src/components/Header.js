import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header className="container mx-auto mb-6 flex items-center max-w-xl">
    <Link href="/">
      <a
        className="flex items-center transition-opacity hover:opacity-75 duration-500"
        title="Home page"
      >
        <Image
          src="/logo-192x192.png"
          alt="Pokemon logo"
          layout="fixed"
          width="60"
          height="60"
        />
        <h1 className="text-4xl text-bold ml-2">Pokedex</h1>
      </a>
    </Link>

    <Link href="https://github.com/JalimRabey/pokedex">
      <a
        className="flex items-center ml-auto mr-4 transition-opacity hover:opacity-75 duration-500"
        title="Source Code"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/github.svg"
          alt="Pokemon logo"
          layout="fixed"
          width="35"
          height="35"
        />
      </a>
    </Link>
  </header>
);

export default Header;
