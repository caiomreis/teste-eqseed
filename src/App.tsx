import React from "react";
import GlobalStyle from "./style";
import { BrowserRouter } from "react-router-dom";
import { TesteEqSeedRoutes } from "./router/router";
import Scaffold from "./components/scaffold";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <GlobalStyle />
      <BrowserRouter basename="/">
        <Scaffold>
          <TesteEqSeedRoutes />
        </Scaffold>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
