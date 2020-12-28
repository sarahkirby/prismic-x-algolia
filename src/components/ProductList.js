import Link from 'next/link';
import styled from 'styled-components';

import RichText from './RichText';

import colors from '../styles/colors';
import breakpoints from '../styles/breakpoints';

const gridItem = {
  small: '80vw',
  medium: '25vw',
}

const Container = styled.div`
  margin: 100px auto;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px 20px;
  grid-template-columns: repeat(1, ${gridItem.small});
  justify-content: center;

  ${breakpoints.small`
    grid-template-columns: repeat(3, ${gridItem.medium});
  `}
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

const NoProductsMsg = styled.p`
  text-align: center;
`;

const ProductList = ({ products }) => (
  <Container>
    {products?.length ? (
      <Grid>
        {products.map(({ _meta, name, color, hover_image }) => (
          <Link key={_meta.uid} href={`/${encodeURIComponent(_meta.uid)}`}>
            <a>
              <Image color={color} image={hover_image.url} />
              <Title>
                <RichText text={name} />
              </Title>
            </a>
          </Link>
        ))}
      </Grid>
    ) : (
      <NoProductsMsg>No products to show &#128557;</NoProductsMsg>
    )}
  </Container>
);

export default ProductList;
