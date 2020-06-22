const AVATAR_URL = `https://api.adorable.io/avatars/128`;
const SRC_URL = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;

export const questions = [
  {
    aspect: `genre`,
    genre: `rock`,
    answers: [
      {
        src: SRC_URL,
        genre: `rock`,
      }, {
        src: SRC_URL,
        genre: `blues`,
      }, {
        src: SRC_URL,
        genre: `jazz`,
      }, {
        src: SRC_URL,
        genre: `rock`,
      }
    ]
  }, {
    aspect: `artist`,
    song: {
      artist: `Jim Beam`,
      src: SRC_URL,
    },
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `John Snow`,
      }, {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jack Daniels`,
      }, {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jim Beam`,
      }
    ]
  }
];
