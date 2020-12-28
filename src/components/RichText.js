import PrismicDOM from 'prismic-dom';

// applies some very low key styling
// const Content = styled.div`
//   h1,
//   h2,
//   h3,
//   h4,
//   h5 {
//     margin-top: ${rem(48)};
//     margin-bottom: ${rem(15)};

//     &:first-child {
//       margin-top: 0;
//     }
//     &:last-child {
//       margin-bottom: 0;
//     }
//   }
//   h1 {
//     ${typo.h3}
//   }
//   h2 {
//     ${typo.h4}
//   }
//   h3 {
//     ${typo.h5}
//   }
//   h4 {
//     ${typo.h6}
//   }
//   h5 {
//     ${typo.h7}
//   }
//   p,
//   li {
//     ${typo.p1}
//     margin-top: 0;
//     margin-bottom: 1em;

//     &:last-child {
//       margin-bottom: 0;
//     }
//   }
//   strong {
//     font-weight: bold;
//   }
//   em {
//     /* italic: todo */
//   }
//   ul,
//   ol {
//     margin-top: 0;
//   }
//   ul li {
//     &:before {
//       content: '';
//       position: relative;
//       top: -1px;
//       display: inline-block;
//       width: 4px;
//       height: 4px;
//       border-radius: 4px;
//       vertical-align: middle;
//       background: ${COLORS.grey.dark};
//       margin-right: ${rem(12)};
//     }
//   }
//   ol li {
//     list-style-type: decimal;
//     list-style-position: inside;
//   }
//   a {
//     text-decoration: none;
//     color: ${COLORS.brand.coral};

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

const clean = (text) => text.map((block) => ({
  ...block,
  text: block.text.trim(),
}));

const RichText = ({ text, noHtml }) => {
  if (!text) {
    return null;
  }

  const html = !noHtml
    ? PrismicDOM.RichText.asHtml(clean(text))
    : PrismicDOM.RichText.asText(text);

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default RichText;
