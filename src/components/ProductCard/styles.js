import styled from 'styled-components';

export const Article = styled.article`
  max-width: 400px;
  padding: 16px;
  margin: 12px 8px;
  border: 2px solid #2c3841;
  border-radius: 4px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  & img {
    border-radius: 4px;
    width: 320px;
    max-width: 340px;
    max-height: 260px;
    object-fit: cover;
    aspect-ratio: 9 / 16;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & div {
    align-self: start;
    margin-right: 8px;
  }

  & button {
    align-self: end;
  }
`;

export const CardTitle = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 18px;
  font-weight: 500;
`;

export const CardPrice = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #f3f3f3;
`;
