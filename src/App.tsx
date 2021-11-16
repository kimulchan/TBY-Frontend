import React from 'react';
import { Provider } from 'react-redux';
import store from './module/store';
import RootRouter from './router/RootRouter';
import GlobalStyle from "./style/globalStyle";
function App() {
  return (
    <Provider store={store}>
      <RootRouter></RootRouter>
      <GlobalStyle/>
    </Provider>
  );
}

export default App;
