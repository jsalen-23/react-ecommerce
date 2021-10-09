import styled from 'styled-components';
import { fadeIn } from '../../statics/styles/animations';
import { device } from '../../mediaQuery';

export const FormGroup = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  ${fadeIn({ time: '0.2s' })}

  & input,
  select {
    height: 40px;
    margin-bottom: 8px;
    font-size: 18px;
    padding-left: 6px;

    &:focus {
      outline: none;
    }
  }

  & label {
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 6px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 410px;
  margin: 0 auto;
  margin-top: 24px;
`;

export const Header = styled.h3`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  margin: 0 auto 20px;
`;

export const Label = styled.h4`
  margin: 0 auto 20px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #b5b5b5;
`;

export const Confirmation = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const InfoCard = styled.div`
  width: 100%;
  height: auto;
  padding: 16px;
  margin: 12px auto;
  background-color: #1e2c3a;
  border-radius: 4px;
  font-size: 18px;
`;

export const InfoLabel = styled.label`
  display: block;
  font-weight: 400;
  color: #8899a6;

  & span {
    font-weight: 500;
    color: #f7f7f7;
  }
`;
