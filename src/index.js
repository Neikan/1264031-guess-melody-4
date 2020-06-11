import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  ERRORS_COUNT: 3
};

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
    />,
    root
);
