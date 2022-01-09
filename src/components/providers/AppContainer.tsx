import React from "react";
import store from "store/index";
import { instance } from "api/instance";
import Routes from "src/routing/Routes";

const AppContainer = (): React.ReactElement => {
  instance.interceptors.request.use((config) => {
    const modConfig = config;
    if (store.getState().app.baseURL) {
      modConfig.baseURL = `${store.getState().app.baseURL}/api/`;
    }
    return modConfig;
  });

  return (
    <>
      <Routes />
    </>
  );
};

export default AppContainer;
