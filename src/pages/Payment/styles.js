import styled from 'styled-components';
import { device } from '../../mediaQuery';

export const Wrapper = styled.section`
  width: 100%;
  height: auto;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;

  @media ${device.laptop} {
    margin-top: 60px;
  }
`;
