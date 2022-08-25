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
import { ProfileReducer } from "./types/typeProfilesReducer";
import profileReducer from "./reducers/profiles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profiles } from './components/profiles/profiles';
export interface reducer {
  data: InitialState;
  profiles:ProfileReducer;
}
const store = configureStore({
  reducer: {
    data: ValuesMovieReducer.reducer,
    profiles:profileReducer.reducer
  },
  middleware: [thunkMiddleware],
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Profiles />}/>
        <Route path="/home" element={<App />}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
