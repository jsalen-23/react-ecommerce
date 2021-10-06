import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 18px;
  border-bottom: 1px solid #2c3841;
  background-color: #10161d;
`;

export const Link = styled(LinkRouter)`
  font-size: 24px;
  font-weight: 700;
  line-height: 22px;
  user-select: none;
`;
