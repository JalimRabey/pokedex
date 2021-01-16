import Link from 'next/link';

import Layout from '../components/Layout';

const Home = ({ pokemon }) => (
  <div>
    <Layout title="NextJS Pokedex">
      <h1 className="text-4xl mb-8 text-center">NextJS Pokedex</h1>

      <ul>
        {pokemon.map((pokeman, index) => (
          <li key={pokeman.name}>
            <Link href={`/pokemon/${index + 1}`}>
              <a
                className="border p-4 border-gray my-2 capitalize flex items-center text-lg bg-gray-200 rounded-md"
                title={pokeman.name}
              >
                <img
                  className="w-20 h-20 mr-3"
                  src={pokeman.imageUrl}
                  alt={pokeman.name}
                />
                <span className="mr-2 font-bold">{index + 1}.</span>
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
