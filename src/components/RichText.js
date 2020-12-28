import PrismicDOM from 'prismic-dom';
import styled from 'styled-components';

const Content = styled.div`
  h1, h2, h3, h4, h5 {
    font: inherit;
  }

  p,
  li {
    margin-top: 0;
    margin-bottom: 1em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    font-weight: bold;
  }

  ul,
  ol {
    margin-top: 0;
  }

  ul li {
    &:before {
      content: '';
      position: relative;
      top: -1px;
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 4px;
      vertical-align: middle;
      margin-right: 12px;
    }
  }

  ol li {
    list-style-type: decimal;
    list-style-position: inside;
  }

  a:hover {
    text-decoration: underline;
  }
`;

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

  return <Content dangerouslySetInnerHTML={{ __html: html }} />;
};

export default RichText;
