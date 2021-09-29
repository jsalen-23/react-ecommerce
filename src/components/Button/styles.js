import styled from 'styled-components';

const SIZE = {
  sm: '25%',
  md: '50%',
  lg: '100%',
};

const VARIANT = {
  primary: '#1d9bf0',
  warning: '#d61616',
};

const HEIGHT = {
  sm: '35px',
  md: '45px',
  lg: '55px',
};

export const Btn = styled.button`
  width: ${(props) => SIZE[props.size] || SIZE['lg']};
  height: ${(props) => HEIGHT[props.size] || HEIGHT['lg']};
  margin: ${(props) => (props.size === 'md' ? '0 auto' : '0')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => VARIANT[props.variant] || VARIANT['primary']};
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;

  & svg {
    margin-left: 4px;
  }
`;
