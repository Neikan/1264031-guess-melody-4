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
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };
  }


  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;

    audio.src = src;

    audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    audio.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    audio.onpause = () => this.setState({
      isPlaying: false,
    });

    audio.ontimeupdate = () => this.setState({
      progress: audio.currentTime
    });
  }


  componentWillUnmount() {
    const audio = this._audioRef.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
  }


  render() {
    const {isLoading, isPlaying} = this.state;
    const btnMarkupClass = isPlaying ? Status.PAUSE : Status.PLAY;

    return (
      <>
        <button
          className={`track__button track__button--${btnMarkupClass}`}
          type="button"
          disabled={isLoading}
          onClick={this._handlePlayButtonClick()}
        />
        <div className="track__status">
          <audio
            ref={this._audioRef}
          />
        </div>
      </>
    );
  }


  componentDidUpdate() {
    const audio = this._audioRef.current;

    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }


  _handlePlayButtonClick() {
    const {onPlayButtonClick} = this.props;

    return () => {
      this.setState({
        isPlaying: !this.state.isPlaying
      });
      onPlayButtonClick();
    };
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};
