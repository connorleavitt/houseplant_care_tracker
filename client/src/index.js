import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit/";
// import { applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import reducers from "./reducers";
import App from "./App";
import "./index.css";

// minute 57

// const store = configureStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </Router>
  </React.StrictMode>
);
