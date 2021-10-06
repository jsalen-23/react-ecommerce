import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loading from '../components/Loading';
import Header from '../components/Header';
import Home from '../pages/Home';
import Navigation from '../components/Navigation';

const Cart = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const Favorites = lazy(() => import('../pages/Favorites'));
const Payment = lazy(() => import('../pages/Payment'));
const PaymentResult = lazy(() => import('../pages/PaymentResult'));

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/favorites' component={Favorites} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/checkout/payment' component={Payment} />
          <Route
            exact
            path='/checkout/payment/success/:orderID'
            component={PaymentResult}
          />
          <Route
            exact
            path='/checkout/payment/fail'
            component={PaymentResult}
          />
        </Switch>
        <Navigation />
      </Suspense>
    </Router>
  );
};

export default Routes;
