import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ModalProvider from "components/base/ModalProvider/ModalProvider";
import AppContainer from "components/providers/AppContainer";
import store from "utils/store";

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ModalProvider>
          <AppContainer />
        </ModalProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
