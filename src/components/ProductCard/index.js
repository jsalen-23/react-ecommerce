import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Button from '../Button';

import useNearScreen from '../../hooks/useNearScreen';

import {
  Article,
  CardTitle,
  CardPrice,
  CardDescription,
  ImageWrapper,
  Footer,
} from './styles';
import { MdArrowForward, MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const ProductCard = ({ product, details }) => {
  const [show, ref] = useNearScreen();
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
    <Article details={details} ref={ref}>
      {show && (
        <>
          <ImageWrapper details={details}>
            <img src={product.image} alt={product.title} loading='lazy' />
          </ImageWrapper>
          <Footer>
            {checkFavorites(product)}
            <Link to={`/product/${product.id}`}>
              <CardTitle>{product.title}</CardTitle>
            </Link>
            {details && (
              <CardDescription>{product.description}</CardDescription>
            )}
            <div>
              <CardPrice>$ {product.price}</CardPrice>
              <Button onClick={() => addToCart(product)}>
                Add to cart <MdArrowForward size='18' />
              </Button>
            </div>
          </Footer>
        </>
      )}
    </Article>
  );
};

export default ProductCard;
