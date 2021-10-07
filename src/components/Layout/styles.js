import styled from 'styled-components';
import { device } from '../../mediaQuery';

export const Wrapper = styled.div`
  height: 100%;
  margin: 16px 8px 76px;

  @media ${device.laptop} {
    margin-left: 88px;
    padding-left: 20px;
  }
`;
