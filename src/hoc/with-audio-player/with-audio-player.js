import React, {PureComponent} from "react";
import AudioPlayer from "../../components/audio-player/audio-player.jsx";
import {DEFAULT_SONG_ID} from "../../mocks/game-data.js";


const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: DEFAULT_SONG_ID,
      };
    }

    render() {
      return <Component
        {...this.props}

        renderPlayer={({src, id}) => {
          return (
            <AudioPlayer
              src = {src}
              isPlaying = {id === this.state.activePlayerId}
              onPlayButtonClick = {this.handlePlayButtonClick(id)}
            />
          );
        }}
      />;
    }


    handlePlayButtonClick(id) {
      return () => this.setState({
        activePlayerId: this.state.activePlayerId === id ? `` : id
      });
    }
  }


  WithActivePlayer.propTypes = {};


  return WithActivePlayer;
};


export default withActivePlayer;
