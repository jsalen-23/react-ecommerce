import emptyCart from '../../statics/images/empty-cart.png';

import { Wrapper } from './styles';

const CartEmpty = () => {
  return (
    <Wrapper>
      <h2>There's nothing in your cart.</h2>
      <img src={emptyCart} alt='Empty Cart' />
    </Wrapper>
  );
};

export default CartEmpty;
