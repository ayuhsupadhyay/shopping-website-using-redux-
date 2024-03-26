import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from 'react-redux';
import App from "./App";
import store from "./redux/Store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
      <div className="fixed top-0 left-1/2 transform -translate-x-1/3 items-center">
       
        <ToastContainer />
      </div>
    </Provider>
  </BrowserRouter>
);
