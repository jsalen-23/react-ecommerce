import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Search from '../components/Search';
import Timeline from '../components/Timeline';
import User from '../components/User';

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
