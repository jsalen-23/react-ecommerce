import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../statics/styles/animations'
import { device } from '../../mediaQuery'

export const Nav = styled.nav`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #2c3841;
  background-color: #10161d;
  z-index: 3;

  @media ${device.tablet} {
    height: 80px;
  }

  @media ${device.laptop} {
    width: 88px;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    top: 58px;
    border-right: 1px solid #2c3841;
    border-top: none;
  }
`

export const Link = styled(LinkRouter)`
  width: 100%;
  height: 100%;
  max-height: 80px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-size: 32px;
  border-top: 0;
  transition: border-top 0.42s ease;

  &[aria-current] {
    color: #1d9bf0;
    font-weight: 700;
    border-top: 1px solid rgba(29, 155, 240, 0.6);

    &:after {
      ${fadeIn({ time: '0.42s' })}
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }

  @media ${device.laptop} {
    &[aria-current] {
      border-right: 1px solid rgba(29, 155, 240, 0.6);
      border-top: none;

      &:after {
        content: '';
      }
    }
  }

  @media ${device.laptopL} {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 24px;
  }
`
