import styled from 'styled-components';
import { device } from '../../mediaQuery';

export const Wrapper = styled.article`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  flex-wrap: wrap;
  margin: 12px 0;

  @media ${device.laptop} {
    padding-right: 74px;
    padding-bottom: 36px;
  }

  @media ${device.laptopL} {
    padding-right: 221px;
  }
`;

export const Title = styled.p`
  margin-right: 12px;
  font-size: 17px;
  font-weight: 500;

  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const Price = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #1d9bf0;

  @media ${device.laptop} {
    font-size: 24px;
  }
`;
