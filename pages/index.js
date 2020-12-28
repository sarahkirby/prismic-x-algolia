import ErrorPage from 'next/error';

import RichText from '../src/components/RichText';

import { allProducts } from '../src/utils/prismic';

export default function Products({ products }) {
  if (!products) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {products?.map(({ name, _meta }) => (
        <RichText key={_meta.uid} text={name} />
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const products = await allProducts();
  return {
    props: {
      products,
    },
  };
}
