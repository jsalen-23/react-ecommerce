import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { device } from '../../mediaQuery';

export const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 18px;
  border-bottom: 1px solid #2c3841;
  background-color: #10161d;

  @media ${device.laptop} {
    padding-right: 42px;
    position: fixed;
    z-index: 3;
  }
`;

export const Link = styled(LinkRouter)`
  font-size: 24px;
  font-weight: 700;
  line-height: 22px;
  user-select: none;
`;
