import styled from 'styled-components'
import { device } from '../../mediaQuery'

export const Wrapper = styled.div`
  height: 100%;
  margin: 16px 8px 76px;

  @media ${device.laptop} {
    margin: 60px 0 0 88px;
    padding: 20px 0 0 20px;
  }

  @media ${device.laptopL} {
    margin-left: 88px;
  }
`
