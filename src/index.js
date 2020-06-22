import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {questions} from "./mocks/game-data.js";


const Settings = {
  ERRORS_COUNT: 3
};

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
      questions={questions}
    />,
    root
);
