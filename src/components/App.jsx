import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Image } from 'react-bootstrap';
import AudioPlayer from './AudioPlayer.jsx';
import playlist from '../playlist';

const centerStyle = {
  borderColor: 'red',
  borderStyle: 'solid',
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrackNumber: 0,
      playing: false,
      volume: 0.5,
      muted: false,
      tracks: playlist,
      duration: 0,
      played: 0,
      loaded: 0,
      loop: false,
      volumeRangeShown: false
    };
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }

  handlePlayPause = () => {
    const { playing } = this.state;
    this.setState({ playing: !playing });
  }

  handleMuteAction = () => {
    const { muted } = this.state;
    this.setState({ muted: !muted });
  }

  handleNextTrackAction = () => {
    const { currentTrackNumber, tracks } = this.state;
    if (currentTrackNumber === (tracks.length - 1)) {
      this.setState({ currentTrackNumber: 0 });
    } else {
      this.setState({ currentTrackNumber: currentTrackNumber + 1 });
    }
  }

  handlePrevTrackAction = () => {
    const { currentTrackNumber, tracks } = this.state;
    if (currentTrackNumber === 0) {
      this.setState({ currentTrackNumber: tracks.length - 1 });
    } else {
      this.setState({ currentTrackNumber: currentTrackNumber - 1 });
    }
  }

  handleDuration = (duration) => {
    this.setState({ duration });
  }

  handleVolumeChange = (e) => {
    const { muted } = this.state;
    const volume = parseFloat(e.target.value);
    this.setState({ volume });
    if (volume === 0) {
      this.setState({ muted: true });
    }
    if (volume !== 0 && muted !== false) {
      this.setState({ muted: false });
    }
  }

  handleSeekChange = (e) => {
    this.setState({ played: parseFloat(e.target.value) });
  }

  handleSeekMouseDown = () => {
    this.setState({ seeking: true });
  }

  handleSeekMouseUp = (player) => (e) => {
    this.setState({ seeking: false });
    player.seekTo(parseFloat(e.target.value));
  }

  handleProgress = (state) => {
    if (!this.state.seeking) {
      this.setState(state);
    }
  }

  handleTrackSelect = (id) => () => {
    this.setState({ currentTrackNumber: id });
  }

  handleOnEnded = () => {
    const { currentTrackNumber, tracks } = this.state;
    if (currentTrackNumber === (tracks.length - 1)) {
      this.setState({ currentTrackNumber: 0 });
    } else {
      this.setState({ currentTrackNumber: currentTrackNumber + 1 });
    }
  }

  handleRepeateAction = () => {
    const { loop } = this.state;
    this.setState({ loop: !loop });
  }

  handleonMouseEnter = () => {
    this.setState({ volumeRangeShown: true });
  }
  
  handleonMouseLeave = () => {
    this.setState({ volumeRangeShown: false });
  }

  render() {
    const {
      playing,
      volume,
      muted,
      currentTrackNumber,
      tracks,
      duration,
      played,
      loop,
      volumeRangeShown,
      loaded,
    } = this.state;

    return (
      <div className="container">
      <Image src={tracks[currentTrackNumber].meta} rounded fluid width='100%'/>
      <AudioPlayer
        playing={playing}
        volume={volume}
        muted={muted}
        loop={loop}
        currentTrackNumber={currentTrackNumber}
        tracks={tracks}
        duration={duration}
        played={played}
        loaded={loaded}
        onDuration={this.handleDuration}
        onSeekChange={this.handleSeekChange}
        onSeekMouseDown={this.handleSeekMouseDown}
        onSeekMouseUp={this.handleSeekMouseUp}
        onProgressChange={this.handleProgress}
        onEnded={this.handleOnEnded}
        onPlayPauseAction={this.handlePlayPause}
        onMuteAction={this.handleMuteAction}
        onRepeateAction={this.handleRepeateAction}
        onNextTrackAction={this.handleNextTrackAction}
        onPrevTrackAction={this.handlePrevTrackAction}
        onVolumeChange={this.handleVolumeChange}
        volumeRangeShown={volumeRangeShown}
        onMouseEnter={this.handleonMouseEnter}
        onMouseLeave={this.handleonMouseLeave}
      />
       <Table striped bordered hover variant="dark">
        <tbody>
          {tracks.map((track) => (
            <tr
              key={track.id}
              onClick={this.handleTrackSelect(track.id)}
              style={track.id === currentTrackNumber ? centerStyle : null}>
                <td>{track.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    );
  }
}
