import Button from '../Button';

import { Article, CardTitle, CardPrice, ImageWrapper, Footer } from './styles';
import { MdArrowForward } from 'react-icons/md';

const ProductCard = () => {
  return (
    <Article>
      <ImageWrapper>
        <img
          src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
          alt='Name'
        />
      </ImageWrapper>
      <Footer>
        <div>
          <CardTitle>
            Product name un nombre de producto largo no se porque
          </CardTitle>
          <CardPrice>$ 10.00</CardPrice>
        </div>
        <Button>
          Add to cart <MdArrowForward size='18' />
        </Button>
      </Footer>
    </Article>
  );
};

export default ProductCard;
