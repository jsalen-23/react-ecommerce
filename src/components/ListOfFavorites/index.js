import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Empty from '../Empty';
import { noFavs as emptyIcon } from '../../statics/images';
import ProductCard from '../ProductCard';

const ListOfFavorites = () => {
  const {
    state: { favorites },
  } = useContext(AppContext);

  return (
    <>
      {favorites.length === 0 ? (
        <Empty icon={emptyIcon} title='Your favorites list is empty' />
      ) : (
        favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </>
  );
};

export default ListOfFavorites;
