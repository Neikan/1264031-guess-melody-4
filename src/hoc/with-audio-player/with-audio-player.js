import React, {PureComponent} from "react";
import AudioPlayer from "../../components/audio-player/audio-player.jsx";
import {DEFAULT_TRACK_ID} from "../../mocks/game-data.js";


const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTrackId: DEFAULT_TRACK_ID,
      };

      this._handlePlayTrack = this._handlePlayTrack.bind(this);
    }


    render() {
      return <Component
        {...this.props}

        renderPlayer={({src, id}) => this._renderPlayer(src, id)}
      />;
    }


    _renderPlayer(src, id) {
      return <AudioPlayer
        id={id}
        src={src}
        isPlaying={id === this.state.activeTrackId}
        onPlayTrack={this._handlePlayTrack}
      />;
    }


    _handlePlayTrack(id) {
      this.setState({
        activeTrackId: this.state.activeTrackId === id ? `` : id
      });
    }
  }


  WithActivePlayer.propTypes = {};


  return WithActivePlayer;
};


export default withActivePlayer;
