import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";


const Status = {
  PLAY: `play`,
  PAUSE: `pause`
};

export default class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = createRef();

    this.state = {
      isLoading: true
    };

    this._handlePlay = this._handlePlay.bind(this);
  }


  componentDidMount() {
    if (this._audioRef.current) {
      const audio = this._audioRef.current;

      audio.src = this.props.src;

      audio.oncanplaythrough = () => this.setState({
        isLoading: false,
      });
    }
  }


  componentWillUnmount() {
    if (this._audioRef.current) {
      this._audioRef.current.oncanplaythrough = null;
    }
  }


  componentDidUpdate() {
    return this.props.isPlaying
      ? this._audioRef.current.play()
      : this._audioRef.current.pause();
  }


  render() {
    const btnMarkupClass = this.props.isPlaying ? Status.PAUSE : Status.PLAY;

    return (
      <>
        <button
          className={`track__button track__button--${btnMarkupClass}`}
          type="button"
          disabled={this.state.isLoading}
          onClick={this._handlePlay}
        />
        <div className="track__status">
          <audio
            ref={this._audioRef}
          />
        </div>
      </>
    );
  }


  _handlePlay() {
    this.props.onPlayTrack(this.props.id);
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayTrack: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
