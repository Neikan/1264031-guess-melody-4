import {GameType} from "../consts/common-data";


const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const SRC_URL = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;


export const questionGenre = {
  aspect: GameType.GENRE,
  genre: `rock`,
  answers: [
    {
      id: `song-1`,
      src: SRC_URL,
      genre: `rock`,
    }, {
      id: `song-2`,
      src: SRC_URL,
      genre: `blues`,
    }, {
      id: `song-3`,
      src: SRC_URL,
      genre: `jazz`,
    }, {
      id: `song-4`,
      src: SRC_URL,
      genre: `rock`,
    }
  ]
};


export const questionArtist = {
  aspect: GameType.ARTIST,
  song: {
    artist: `Jim Beam`,
    src: SRC_URL,
  },
  answers: [
    {
      id: `artist-1`,
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `John Snow`,
    }, {
      id: `artist-2`,
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jack Daniels`,
    }, {
      id: `artist-3`,
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jim Beam`,
    }
  ]
};
