import PropTypes from "prop-types";
import {GameType} from "../consts/common-data";


export const answerGenreType = PropTypes.shape({
  src: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
});


export const answerArtistType = PropTypes.shape({
  artist: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
});


export const songType = PropTypes.shape({
  artist: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
});


export const aspectType = PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]);


export const questionArtistType = PropTypes.shape({
  answers: PropTypes.arrayOf(answerArtistType).isRequired,
  song: songType.isRequired,
  aspect: aspectType.isRequired,
});


export const questionGenreType = PropTypes.shape({
  answers: PropTypes.arrayOf(answerGenreType).isRequired,
  genre: PropTypes.string.isRequired,
  aspect: aspectType.isRequired,
});
