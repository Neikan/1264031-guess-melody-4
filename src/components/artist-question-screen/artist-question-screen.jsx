import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import {questionArtistType} from "../../props/prop-types.js";


const ArtistQuestionScreen = (props) => {
  const {onFormSubmit, question} = props;
  const {answers, song} = question;

  const handleAnswerChange = (answer) => {
    return (evt) => {
      evt.preventDefault();
      onFormSubmit(question, answer);
    };
  };

  const renderAnswer = (answer, i) => {
    return (
      <div key={answer.artist} className="artist">
        <input className="artist__input visually-hidden" type="radio" name="answer" value={`answer-${i}`} id={`answer-${i}`}
          onChange={handleAnswerChange(answer)} />
        <label className="artist__name" htmlFor={`answer-${i}`}>
          <img className="artist__picture" src={answer.picture} alt={answer.artist} />
          {answer.artist}
        </label>
      </div>
    );
  };

  return (
    <section className="game game--artist">
      <Header />

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button" />
            <div className="track__status">
              <audio
                src={song.src}
              />
            </div>
          </div>
        </div>

        <form className="game__artist">
          {answers.map((answer, i) => renderAnswer(answer, i))}
        </form>
      </section>
    </section>
  );
};


ArtistQuestionScreen.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  question: questionArtistType.isRequired,
};


export default ArtistQuestionScreen;
