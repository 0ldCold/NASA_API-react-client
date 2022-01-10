import { AppInitialStateType } from "reducers/AppReducer/types";
import ManifestReducer from "reducers/ManifestReducer";
import { Action, applyMiddleware, combineReducers, createStore } from "redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import AppReducer from "./reducers/AppReducer";

const allReducers = combineReducers({
  app: AppReducer,
  manifest: ManifestReducer
});

export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    const fullState: RootState = JSON.parse(serializedState);

    return fullState;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: { app: AppInitialStateType }): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};
const persistedState = loadState();
const store = createStore(
  allReducers,
  persistedState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
export type RootState = ReturnType<typeof allReducers>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  saveState({
    app: store.getState().app
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<any>>;

export default store;
