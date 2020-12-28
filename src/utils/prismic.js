import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';

const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://prismic-x-algolia.prismic.io/graphql',
    accessToken: process.env.PRISMIC_TOKEN,
  }),
  cache: new InMemoryCache(),
});

export async function allProducts() {
  const {
    data: {
      allProducts: { edges },
    },
  } = await client.query({
    query: gql`
      query {
        allProducts(lang: "en-gb") {
          edges {
            node {
              name
              hover_image
              color
              _meta {
                uid
              }
            }
          }
        }
      }
    `,
  });

  return edges.map(({ node }) => node);
}

export async function singleProduct(slug) {
  const { data: { product } } = await client.query({
    query: gql`
      query($slug: String!) {
        product(uid: $slug, lang: "en-gb") {
          name
        }
      }
    `,
    variables: {
      slug,
    },
  });

  return product;
}
