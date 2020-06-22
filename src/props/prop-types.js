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
