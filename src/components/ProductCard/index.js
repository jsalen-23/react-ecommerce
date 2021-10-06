import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Button from '../Button';

import { Article, CardTitle, CardPrice, ImageWrapper, Footer } from './styles';
import { MdArrowForward, MdFavoriteBorder } from 'react-icons/md';

const ProductCard = ({ product }) => {
  const { addToCart, addToFavorites } = useContext(AppContext);

  return (
    <Article>
      <ImageWrapper>
        <MdFavoriteBorder size='26' onClick={() => addToFavorites(product)} />
        <img src={product.image} alt={product.title} />
      </ImageWrapper>
      <Footer>
        <CardTitle>{product.title}</CardTitle>
        <div>
          <CardPrice>$ {product.price}</CardPrice>
          <Button onClick={() => addToCart(product)}>
            Add to cart <MdArrowForward size='18' />
          </Button>
        </div>
      </Footer>
    </Article>
  );
};

export default ProductCard;
