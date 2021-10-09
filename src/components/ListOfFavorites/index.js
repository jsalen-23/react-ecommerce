import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Empty from '../Empty';
import { noFavs as emptyIcon } from '../../statics/images';
import ProductCard from '../ProductCard';

import { Wrapper } from './styles';

const ListOfFavorites = () => {
  const {
    state: { favorites },
  } = useContext(AppContext);

  return (
    <>
      {favorites.length === 0 ? (
        <Empty icon={emptyIcon} title='Your favorites list is empty' />
      ) : (
        <Wrapper>
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default ListOfFavorites;
