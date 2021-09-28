import styled from 'styled-components';

export const BtnWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: baseline;
  border-left: 2px solid #2c3841;
  border-right: 2px solid #2c3841;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 17px;
  font-weight: ${(props) => (props.active ? 700 : 300)};
  color: ${(props) => (props.active ? '#f7f7f7' : '#8899a6')};
  background-color: transparent;
  border-bottom: ${(props) =>
    props.active ? '3px solid rgba(29,155,240,0.6)' : '1px solid #2c3841'};
`;
