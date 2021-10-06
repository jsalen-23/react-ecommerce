import styled from 'styled-components';
import { fadeIn } from '../../statics/styles/animations';

export const Footer = styled.footer`
  height: 112px;
  position: fixed;
  right: 8px;
  bottom: 58px;
  left: 8px;
  z-index: 3;
  background-color: #15202b;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const DetailWrapper = styled.div`
  ${fadeIn({ time: '0.36s' })}
  padding-bottom: 100px;
`;
