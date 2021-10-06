import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Button from '../Button';

import { Article, CardTitle, CardPrice, ImageWrapper, Footer } from './styles';
import { MdArrowForward, MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const ProductCard = ({ product }) => {
  const {
    state: { favorites },
    addToCart,
    addToFavorites,
    removeFromFavorites,
  } = useContext(AppContext);

  const checkFavorites = (product) => {
    const isFavorite = favorites.includes(product);

    if (isFavorite) {
      return (
        <MdFavorite size='26' onClick={() => removeFromFavorites(product)} />
      );
    } else {
      return (
        <MdFavoriteBorder size='26' onClick={() => addToFavorites(product)} />
      );
    }
  };

  return (
    <Article>
      <ImageWrapper>
        {checkFavorites(product)}
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
