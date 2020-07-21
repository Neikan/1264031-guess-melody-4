import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";


const withAudio = (Component) => {
  class WithAudio extends PureComponent {
    constructor(props) {
      super(props);

      this._audioRef = createRef();

      this.state = {
        isLoading: true
      };
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
      const {isLoading} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
        >
          <audio
            ref={this._audioRef}
          />
        </Component>
      );
    }
  }


  WithAudio.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };


  return WithAudio;
};


export default withAudio;
