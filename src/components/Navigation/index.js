import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { Nav, Link } from './styles'
import { MdHome, MdShoppingCart, MdFavorite } from 'react-icons/md'
import CartCounter from '../CartCounter'

const Navigation = () => {
  const {
    state: {
      cart: { products },
    },
  } = useContext(AppContext)

  return (
    <Nav>
      <Link exact to='/'>
        <MdHome />
      </Link>
      <Link exact to='/cart'>
        {products.length > 0 && <CartCounter counter={products.length} />}
        <MdShoppingCart />
      </Link>
      <Link exact to='/favorites'>
        <MdFavorite />
      </Link>
    </Nav>
  )
}

export default Navigation
