const AVATAR_URL = `https://api.adorable.io/avatars/128`;


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
      src: `https://upload.wikimedia.org/wikipedia/commons/5/5b/Demoiselle_Dner_-_01_-_Des_ttes_trop_pleines.ogg`,
      genre: `rock`,
    }, {
      id: `song-2`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1c/Demoiselle_Dner_-_02_-_Autodtermination.ogg`,
      genre: `blues`,
    }, {
      id: `song-3`,
      src: `https://upload.wikimedia.org/wikipedia/commons/d/d6/Demoiselle_Dner_-_06_-_300.ogg`,
      genre: `jazz`,
    }, {
      id: `song-4`,
      src: `https://upload.wikimedia.org/wikipedia/commons/7/76/Demoiselle_Dner_-_08_-_Une_trs_mauvaise_ide.ogg`,
      genre: `rock`,
    }
  ]
};


export const questionArtist = {
  aspect: GameType.ARTIST,
  song: {
    id: `song-1`,
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/6/6a/The_Rope_River_Blues_Band_-_02_-_The_Vistas_Missing_Views.ogg`,
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
