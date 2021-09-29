import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: auto;
`;

export const FormGroup = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  & input,
  select {
    height: 40px;
    margin-bottom: 8px;
  }

  & label {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 6px;
  }
`;
