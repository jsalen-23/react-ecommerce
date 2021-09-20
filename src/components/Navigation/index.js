import { Nav, Link } from './styles';
import { MdHome, MdSearch, MdPerson } from 'react-icons/md';

const Navigation = () => {
  return (
    <Nav>
      <Link exact to='/'>
        <MdHome />
      </Link>
      <Link exact to='/search'>
        <MdSearch />
      </Link>
      <Link exact to='/user'>
        <MdPerson />
      </Link>
    </Nav>
  );
};

export default Navigation;
