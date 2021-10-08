import styled from 'styled-components';
import { fadeIn } from '../../statics/styles/animations';
import { device } from '../../mediaQuery';

export const Footer = styled.footer`
  height: 112px;
  position: fixed;
  right: 8px;
  bottom: 58px;
  left: 8px;
  z-index: 3;
  background-color: #15202b;

  @media ${device.laptop} {
    margin-left: 88px;

    button {
      width: 50%;
      margin: 0 auto;
    }
  }

  @media ${device.laptopL} {
    margin-left: 210px;

    button {
      width: 25%;
    }
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const DetailWrapper = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  ${fadeIn({ time: '0.36s' })}
  padding-bottom: 100px;
`;
