import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit"
import UserReducer from "./UserReducer.jsx";
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';


const store=configureStore({
  reducer:{
    users:UserReducer
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
