import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App1118 from "./24.11.18/App1118";
import App1119 from "./24.11.19/App1119";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App1118 />*/}
    <App1119 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
