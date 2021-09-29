import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Layout from '../../components/Layout';
import CartAmount from '../../components/CartAmount';
import CartEmpty from '../../components/CartEmpty';
import DetailCard from '../../components/DetailCard';
import Button from '../../components/Button';

import { MdArrowForward } from 'react-icons/md';
import { Footer, BtnWrapper, DetailWrapper } from './styles';

const Cart = () => {
  const {
    state: {
      cart: { products },
    },
    removeFromCart,
  } = useContext(AppContext);

  return (
    <Layout title='Cart'>
      {products.length === 0 ? (
        <CartEmpty />
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
            <Button size='lg'>
              Checkout <MdArrowForward size='18' />
            </Button>
          </Footer>
        </>
      )}
    </Layout>
  );
};

export default Cart;
