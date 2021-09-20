import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Search from '../pages/Search';
import Timeline from '../pages/Timeline';
import User from '../pages/User';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Timeline} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/user' component={User} />
      </Switch>
      <Navigation />
    </Router>
  );
};

export default Routes;
