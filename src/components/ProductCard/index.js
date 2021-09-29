import Button from '../Button';

import { Article, CardTitle, CardPrice, ImageWrapper, Footer } from './styles';
import { MdArrowForward } from 'react-icons/md';

const ProductCard = ({ handleAdd, product }) => {
  return (
    <Article>
      <ImageWrapper>
        <img src={product.image} alt={product.title} />
      </ImageWrapper>
      <Footer>
        <CardTitle>{product.title}</CardTitle>
        <div>
          <CardPrice>$ {product.price}</CardPrice>
          <Button onClick={handleAdd(product)}>
            Add to cart <MdArrowForward size='18' />
          </Button>
        </div>
      </Footer>
    </Article>
  );
};

export default ProductCard;
