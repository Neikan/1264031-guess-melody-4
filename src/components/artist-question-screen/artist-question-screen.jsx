import React from "react";
import PropTypes from "prop-types";
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

  const renderAnswer = (answer) => {
    return (
      <div key={answer.id} className="artist">
        <input className="artist__input visually-hidden" type="radio" name="answer" value={answer.id} id={answer.id}
          onChange={handleAnswerChange(answer)} />
        <label className="artist__name" htmlFor={answer.id}>
          <img className="artist__picture" src={answer.picture} alt={answer.artist} />
          {answer.artist}
        </label>
      </div>
    );
  };

  return (
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
        {answers.map(renderAnswer)}
      </form>
    </section>
  );
};


ArtistQuestionScreen.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  question: questionArtistType.isRequired,
};


export default ArtistQuestionScreen;
