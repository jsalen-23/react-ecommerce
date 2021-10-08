import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Nav, Link } from './styles';
import { MdHome, MdShoppingCart, MdFavorite } from 'react-icons/md';
import CartCounter from '../CartCounter';
import useWindowSize from '../../hooks/useWindowSize';

const Navigation = () => {
  const size = useWindowSize();
  const {
    state: {
      cart: { products },
    },
  } = useContext(AppContext);

  const label = (text) => {
    return size.width >= 1440 && text;
  };

  return (
    <Nav>
      <Link exact to='/'>
        <MdHome /> {label('Home')}
      </Link>
      <Link exact to='/cart'>
        {products.length > 0 && <CartCounter counter={products.length} />}
        <MdShoppingCart /> {label('Cart')}
      </Link>
      <Link exact to='/favorites'>
        <MdFavorite /> {label('Saved')}
      </Link>
    </Nav>
  );
};

export default Navigation;
