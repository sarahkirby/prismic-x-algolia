import { css } from 'styled-components';

export const breakpointSizes = {
  small: 768,
  medium: 1024,
  large: 1200,
};

const breakpoints = {};

const query = (size) => (content, ...args) => css`
  @media screen and (min-width: ${size}px) {
    ${css(content, ...args)}
  }
`;

Object.keys(breakpointSizes).forEach(key => {
  breakpoints[key] = query(breakpointSizes[key]);
});

breakpoints.custom = query;

// USAGE EXAMPLE
// breakpoints.small`-css here-`
// breakpoints.custom(1000)`-css here-`

export default breakpoints;
