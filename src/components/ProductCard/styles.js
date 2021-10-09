import styled from 'styled-components';
import { fadeIn } from '../../statics/styles/animations';

export const Article = styled.article`
  ${fadeIn({ time: '0.36s' })}
  max-width: ${(props) => (props.details ? '768px' : '390px')};
  min-width: 320px;
  min-height: 400px;
  margin: 12px 0;
  border: 2px solid #2c3841;
  border-radius: 4px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;

  & img {
    width: 100%;
    max-width: ${(props) => (props.details ? '100%' : '425px')};
    max-height: ${(props) => (props.details ? '50vh' : '260px')};
    box-shadow: 0px 0px 5px 2px rgb(44 56 65 / 50%);
    border-radius: 4px;
    object-fit: cover;
    aspect-ratio: 9 / 16;
  }
`;

export const Footer = styled.footer`
  position: relative;
  width: 100%;
  min-height: 176px;
  display: grid;
  padding: 16px;
  grid-template-rows: ${(props) => (props.details ? '1f 1f auto' : '1fr auto')};

  & div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  & > svg {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    color: #1d9bf0;

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: scale(0.9);
    }
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

export const CardDescription = styled.p`
  min-width: 320px;
  margin-bottom: 16px;
`;
