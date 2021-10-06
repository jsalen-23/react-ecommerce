import styled from 'styled-components';
import { fadeIn } from '../../statics/styles/animations';

export const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: grid;
  place-items: center;
  margin-top: 78px;
  ${fadeIn({ time: '0.36s' })}

  & img {
    width: 280px;
    height: auto;
    object-fit: cover;
  }
`;
