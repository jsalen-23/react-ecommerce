import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Payment from '../pages/Payment';
import PaymentResult from '../pages/PaymentResult';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='favorites' component={Favorites} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/checkout/payment' component={Payment} />
        <Route
          exact
          path='/checkout/payment/success/:orderID'
          component={PaymentResult}
        />
        <Route exact path='/checkout/payment/fail' component={PaymentResult} />
      </Switch>
      <Navigation />
    </Router>
  );
};

export default Routes;
