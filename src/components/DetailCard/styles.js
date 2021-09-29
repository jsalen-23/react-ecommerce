import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  margin: 12px auto;
  padding-left: 8px;
  display: grid;
  grid-template-columns: 1fr 0.5fr 94px;
  align-items: center;
  justify-items: center;
  background-color: #1e2c3a;
  border-radius: 4px;
  font-size: 17px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Price = styled.p`
  font-weight: 300;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 120px;
  max-width: 340px;
  object-fit: cover;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
