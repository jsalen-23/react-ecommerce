import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Wrapper = styled.header`
  width: 100%;
  height: 59px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  border-bottom: 1px solid #2c3841;
`;

export const Link = styled(LinkRouter)`
  width: 35px;
  height: 35px;
  overflow: hidden;
  border-radius: 50%;

  & img {
    width: 35px;
    height: 35px;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 22px;
  user-select: none;
`;
