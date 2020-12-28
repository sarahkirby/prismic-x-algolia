import ErrorPage from 'next/error';
import RichText from '../src/components/RichText';

import { singleProduct } from '../src/utils/prismic';

export default function Product({ product }) {
  if (!product) return <ErrorPage statusCode={404} />;

  return (
    <h1>
      <RichText text={product.name} />
    </h1>
  );
}

export async function getServerSideProps({ params }) {
  const product = await singleProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
