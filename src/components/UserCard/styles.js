import styled from 'styled-components';

export const Card = styled.section`
  width: 100%;
  height: auto;
  border: 2px solid #2c3841;
  border-bottom: none;
  border-radius: 4px;
  margin-top: 80px;
  position: relative;
  padding-bottom: 20px;
`;

export const Picture = styled.div`
  position: absolute;
  top: -60px;
  left: calc(50% - 60px);
  margin: 0 auto;

  & img {
    width: 120px;
    height: auto;
    object-fit: cover;
    border: 2px solid #2c3841;
    border-radius: 50%;
  }
`;

export const CardBody = styled.div`
  width: 100%;
  height: auto;
  margin-top: 80px;
  text-align: center;

  & h2 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  & p {
    font-size: 17px;
    font-weight: 400;
  }
`;
