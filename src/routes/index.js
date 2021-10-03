import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import Payment from '../pages/Payment';
import User from '../pages/User';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/user' component={User} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/checkout/payment' component={Payment} />
      </Switch>
      <Navigation />
    </Router>
  );
};

export default Routes;
