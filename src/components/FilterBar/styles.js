import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 40px;
  margin-bottom: 16px;
`;

export const Select = styled.select`
  width: 100%;
  max-width: 500px;
  height: 45px;
  padding: 8px;
  background-color: #10161d;
  color: #f0f0f0;
  font-size: 18px;
  letter-spacing: 1.2px;
  font-weight: 500;
  outline: 0;
  border: 2px solid #2c3841;
  border-radius: 4px;
  cursor: pointer;

  & option {
    font-size: 18px;
  }
`;
