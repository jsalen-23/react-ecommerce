import styled from 'styled-components';
import { device } from '../../mediaQuery';

export const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 4px;
  right: 30px;
  background-color: #1d9bf0;
  border-radius: 50%;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 1px solid #2c3841;
  box-shadow: 0px 0 4px 0px rgb(156 156 156 / 69%);

  @media ${device.tablet} {
    right: 98px;
    top: 8px;
  }

  @media ${device.laptop} {
    right: 12px;
    top: 8px;
  }

  @media ${device.laptopL} {
    right: 50px;
    top: 12px;
  }
`;
