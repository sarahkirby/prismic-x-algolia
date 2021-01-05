import Link from 'next/link';
import styled from 'styled-components';
import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

import RichText from './RichText';

import breakpoints from '../styles/breakpoints';
import colors from '../styles/colors';

const gridItem = {
  small: '80vw',
  medium: '25vw',
}

const Container = styled.div`
  margin: 100px auto;

  .ais-Hits-list {
    display: grid;
    grid-gap: 10px 20px;
    grid-template-columns: repeat(1, ${gridItem.small});
    justify-content: center;

    ${breakpoints.small`
      grid-template-columns: repeat(3, ${gridItem.medium});
    `}
  }
`;

const Image = styled.div`
  width: 100%;
  height: ${gridItem.small};
  background-color: ${(props) => props.color};
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;

  &:hover {
    background-image: none;
  }

  ${breakpoints.small`
    height: ${gridItem.medium};
  `}
`;

const Title = styled.h4`
  margin: 6px 0;
  font-size: 16px;
  font-weight: 400;
  color: ${colors.white};
  opacity: 0.8;
`;

const searchClient = algoliasearch(
  "HO2HS4J93T",
  "0d5dec9afa66a2643c12c98a9148da19"
);

export default function Search() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="products"
    >
      <SearchBox />
      <Container>
        <Hits hitComponent={SearchResults} />
      </Container>
    </InstantSearch>
  );
}

const SearchResults = ({ hit }) => (
  <Link key={hit._meta.uid} href={`/${encodeURIComponent(hit._meta.uid)}`}>
    <a>
      <Image color={hit.color} image={hit.hover_image.url} />
      <Title>
        <RichText text={hit.name} />
      </Title>
    </a>
  </Link>
);
