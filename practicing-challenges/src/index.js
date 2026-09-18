import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import AppAccordian from "./Accordian component/accordian";
// import Apptip from "./tipCalculator/Apptip";
import AppLogin from "./LoginForm/loginform";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppAccordian /> */}
    {/* <Apptip /> */}
    <AppLogin />
  </React.StrictMode>,
);
