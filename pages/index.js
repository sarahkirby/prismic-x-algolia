import ErrorPage from 'next/error';

import Search from '../src/components/Search';

import { allProducts } from '../src/utils/prismic';

export default function Products({ products }) {
  if (!products) return <ErrorPage statusCode={404} />;

  return <Search products={products} />;
}

export async function getServerSideProps() {
  const products = await allProducts();
  return {
    props: {
      products,
    },
  };
}
