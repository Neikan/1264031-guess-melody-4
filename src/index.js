import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {GameConfig} from "./consts/common-data.js";
import {questionGenre, questionArtist} from "./mocks/game-data.js";


const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      errorsCount={GameConfig.ERRORS_COUNT}
      questionGenre = {questionGenre}
      questionArtist = {questionArtist}
    />,
    root
);
