import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';

const Pokemon = ({ name, imageUrl, weight, height, types }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <Layout>
        <h1 className="text-4xl mb-2 text-center capitalize">Loading...</h1>
      </Layout>
    );
  }

  return (
    <Layout title={name}>
      <div className="border p-4 border-gray my-2 text-lg text-black dark:text-white bg-gray-200 dark:bg-gray-700 dark:border-gray-700 rounded-md shadow-md">
        <h1 className="text-4xl mb-2 text-center capitalize">{name}</h1>

        <div className="flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={name}
            width="200"
            height="200"
            layout="fixed"
          />
        </div>

        <p>
          <span className="font-bold mr-2">Weight: </span> {weight}
        </p>

        <p>
          <span className="font-bold mr-2">Height: </span> {height}
        </p>

        <h2 className="text-2xl mt-6 mb-2 font-bold">Types</h2>

        <ul>
          {types.map((type) => (
            <li key={type.type.name} className="flex items-center mt-2">
              <span className="h-6 flex items-center sm:h-7">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-cyan-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <p className="ml-1">{type.type.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeman = await response.json();

    const paddedIndex = ('00' + id).slice(-3);
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

    return {
      props: {
        ...pokeman,
        imageUrl,
      },
    };
  } catch (err) {}

  const user = await githubApiService.fetchUserData(userName);
  const repositories = await githubApiService.fetchRepositories(userName);

  return {
    props: {
      user,
      repositories,
    },
    revalidate: 60,
  };
};

export default Pokemon;
