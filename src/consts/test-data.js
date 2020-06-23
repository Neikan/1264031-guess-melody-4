const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const SRC_URL = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;


export const GameType = {
  WELCOME: `welcome`,
  ARTIST: `artist`,
  GENRE: `genre`,
};


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
      picture: `${AVATAR_URL}/0`,
      artist: `John Snow`,
    }, {
      id: `artist-2`,
      picture: `${AVATAR_URL}/1`,
      artist: `Jack Daniels`,
    }, {
      id: `artist-3`,
      picture: `${AVATAR_URL}/2`,
      artist: `Jim Beam`,
    }
  ]
};
