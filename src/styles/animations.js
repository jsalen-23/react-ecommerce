import { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

const loadingRingKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

export const loadingRing = ({
  time = '1.2s',
  type = 'cubic-bezier(0.5, 0, 0.5, 1)',
  iteration = 'infinite',
} = {}) =>
  css`
    animation: ${time} ${loadingRingKeyframes} ${type} ${iteration};
  `;
