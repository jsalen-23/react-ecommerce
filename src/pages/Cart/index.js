import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout';
import CartAmount from '../../components/CartAmount';
import Empty from '../../components/Empty';
import DetailCard from '../../components/DetailCard';
import Button from '../../components/Button';

import { MdArrowForward } from 'react-icons/md';
import { Footer, BtnWrapper, DetailWrapper } from './styles';
import emptyCart from '../../statics/images/empty-cart.png';

const Cart = () => {
  const history = useHistory();
  const {
    state: {
      cart: { products },
    },
    removeFromCart,
  } = useContext(AppContext);

  return (
    <Layout title='Cart'>
      {products.length === 0 ? (
        <Empty icon={emptyCart} title='There is nothing in your cart.' />
      ) : (
        <>
          <DetailWrapper>
            {products.map((product) => (
              <div key={product.id}>
                <DetailCard {...product} />
                <BtnWrapper>
                  <Button
                    size='sm'
                    variant='warning'
                    onClick={() => removeFromCart(product)}
                  >
                    Delete
                  </Button>
                </BtnWrapper>
              </div>
            ))}
          </DetailWrapper>
          <Footer>
            <CartAmount />
            <Button size='lg' onClick={() => history.push('/checkout')}>
              Checkout <MdArrowForward size='18' />
            </Button>
          </Footer>
        </>
      )}
    </Layout>
  );
};

export default Cart;
