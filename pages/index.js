import ErrorPage from 'next/error';

import ProductList from '../src/components/ProductList';

import { allProducts } from '../src/utils/prismic';

export default function Products({ products }) {
  if (!products) {
    return <ErrorPage statusCode={404} />;
  }

  return <ProductList products={products} />;
}

export async function getServerSideProps() {
  const products = await allProducts();
  return {
    props: {
      products,
    },
  };
}
