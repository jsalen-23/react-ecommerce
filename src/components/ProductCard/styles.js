import styled from 'styled-components';
import { fadeIn } from '../../statics/styles/animations';

export const Article = styled.article`
  ${fadeIn({ time: '0.36s' })}
  max-width: 400px;
  margin: 12px 0;
  border: 2px solid #2c3841;
  border-radius: 4px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & svg {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
  }

  & img {
    width: 100%;
    max-width: 425px;
    max-height: 260px;
    box-shadow: 0px 0px 5px 2px rgb(44 56 65 / 50%);
    border-radius: 4px;
    object-fit: cover;
    aspect-ratio: 9 / 16;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 16px;
  grid-template-rows: 1fr auto;

  & div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
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
  font-size: 22px;
  font-weight: 400;
  color: #b5b5b5;
`;
