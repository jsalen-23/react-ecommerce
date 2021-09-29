import AppProvider from './context/AppContext';
import useInitialState from './hooks/useInitialState';

import Routes from './routes';

import GlobalStyles from './statics/styles/GlobalStyles';

const App = () => {
  const initialState = useInitialState();
  const isLoaded = Object.keys(initialState.state).length;
  return (
    <>
      {isLoaded ? (
        <AppProvider>
          <GlobalStyles />
          <Routes />
        </AppProvider>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default App;
