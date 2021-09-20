import { Fragment } from 'react';

import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Routes />
    </Fragment>
  );
};

export default App;
