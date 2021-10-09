import { useContext, lazy, Suspense } from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import { emptyCart } from '../../statics/images';

import { MdArrowForward } from 'react-icons/md';
import { Footer, BtnWrapper, DetailWrapper } from './styles';

const CartAmount = lazy(() => import('../../components/CartAmount'));
const Empty = lazy(() => import('../../components/Empty'));
const DetailCard = lazy(() => import('../../components/DetailCard'));
const Button = lazy(() => import('../../components/Button'));

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
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </Layout>
  );
};

export default Cart;
