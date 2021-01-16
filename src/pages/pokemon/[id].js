import Link from 'next/link';
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
      <h1 className="text-4xl mb-2 text-center capitalize">{name}</h1>

      <img className="mx-auto" src={imageUrl} alt={name} />

      <p>
        <span className="font-bold mr-2">Weight: </span> {weight}
      </p>

      <p>
        <span className="font-bold mr-2">Height: </span> {height}
      </p>

      <h2 className="text-2xl mt-6 mb-2">Types</h2>

      {types.map((type) => (
        <p key={type.type.name}>{type.type.name}</p>
      ))}

      <p className="mt-10 text-center pb-6">
        <Link href="/">
          <a className="text-2xl underline">Home</a>
        </Link>
      </p>
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
