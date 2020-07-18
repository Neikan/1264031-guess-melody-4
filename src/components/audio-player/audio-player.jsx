import React, {PureComponent} from "react";
import PropTypes from "prop-types";


const Status = {
  PLAY: `play`,
  PAUSE: `pause`
};

export default class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._handlePlay = this._handlePlay.bind(this);
  }

  render() {
    const {isLoading, isPlaying, children} = this.props;

    const btnMarkupClass = isPlaying ? Status.PAUSE : Status.PLAY;

    return (
      <>
        <button
          className={`track__button track__button--${btnMarkupClass}`}
          type="button"
          disabled={isLoading}
          onClick={this._handlePlay}
        />
        <div className="track__status">
          {children}
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
  isLoading: PropTypes.bool.isRequired,
  onPlayTrack: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};
