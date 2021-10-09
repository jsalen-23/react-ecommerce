import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: auto;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  & img {
    width: 280px;
    height: auto;
    object-fit: cover;
  }

  & p {
    font-size: 18px;
    line-height: 26px;
    text-align: center;
  }

  & button {
    margin-top: 12px;
  }
`;
