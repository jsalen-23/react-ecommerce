import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Wrapper, Title, Price } from './styles';

const CartAmount = () => {
  const {
    state: {
      cart: { total },
    },
  } = useContext(AppContext);

  return (
    <Wrapper>
      <Title>Cart Total:</Title>
      <Price>$ {total.toFixed(2)}</Price>
    </Wrapper>
  );
};

export default CartAmount;
