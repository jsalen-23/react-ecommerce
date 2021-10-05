import { Nav, Link } from './styles';
import { MdHome, MdShoppingCart, MdFavorite } from 'react-icons/md';

const Navigation = () => {
  return (
    <Nav>
      <Link exact to='/'>
        <MdHome />
      </Link>
      <Link exact to='/cart'>
        <MdShoppingCart />
      </Link>
      <Link exact to='/favorites'>
        <MdFavorite />
      </Link>
    </Nav>
  );
};

export default Navigation;
