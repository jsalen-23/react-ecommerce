import Button from '../Button';

import { Article, CardTitle, CardPrice, ImageWrapper, Footer } from './styles';
import { MdArrowForward } from 'react-icons/md';

const ProductCard = ({ image, title, price }) => {
  return (
    <Article>
      <ImageWrapper>
        <img src={image} alt={title} />
      </ImageWrapper>
      <Footer>
        <CardTitle>{title}</CardTitle>
        <div>
          <CardPrice>$ {price}</CardPrice>
          <Button>
            Add to cart <MdArrowForward size='18' />
          </Button>
        </div>
      </Footer>
    </Article>
  );
};

export default ProductCard;
