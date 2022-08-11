import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import ValuesMovieReducer, {
  InitialState,
} from "./reducers/valuesMovieReducers";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
export interface reducer {
  data: InitialState;
}

const store = configureStore({
  reducer: {
    data: ValuesMovieReducer.reducer,
  },
  middleware: [thunkMiddleware],
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
