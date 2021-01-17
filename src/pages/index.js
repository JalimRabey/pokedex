import Link from 'next/link';
import Image from 'next/image';

import Layout from '../components/Layout';

const Home = ({ pokemon }) => (
  <div>
    <Layout title="Pokedex">
      <p className="text-center">
        <Link href="https://github.com/JalimRabey/pokedex">
          <a
            className="text-blue-600 font-bold hover:text-blue-800 transition duration-500"
            target="_blank"
            rel="noopener noreferrer"
            title="Pokedex - Github"
          >
            View project source code
          </a>
        </Link>
      </p>

      <ul>
        {pokemon.map((pokeman, index) => (
          <li key={pokeman.name}>
            <Link href={`/pokemon/${index + 1}`}>
              <a
                className="border p-4 my-2 capitalize flex items-center text-lg rounded-md shadow-md text-black dark:text-white bg-gray-200 dark:bg-gray-600 border-gray dark:border-gray-600 hover:bg-gray-300 hover:border-gray-300 dark:hover:bg-gray-700 dark:hover:border-gray-700 transition duration-500"
                title={`${pokeman.name} details`}
              >
                <Image
                  src={pokeman.imageUrl}
                  alt={pokeman.name}
                  width="80"
                  height="80"
                  layout="fixed"
                />
                <span className="ml-2 mr-2 font-bold">{index + 1}.</span>
                {pokeman.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  </div>
);

export const getStaticProps = async (context) => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const { results } = await response.json();

    const pokemon = results.map((pokeman, index) => {
      const paddedIndex = ('00' + (index + 1)).slice(-3);
      const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

      return {
        ...pokeman,
        imageUrl,
      };
    });

    return {
      props: {
        pokemon,
      },
    };
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      error: true,
    },
  };
};

export default Home;
