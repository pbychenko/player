import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Image, Container } from 'react-bootstrap';
import AudioPlayer from './AudioPlayer.jsx';
// import ControlPanel from './ControlPanel.jsx';
import playlist from '../playlist';

const centerStyle = {
  'borderColor': 'red',
  'borderStyle': 'solid',
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentTrack: playlist[1],
      currentTrackNumber: 0,
      // nextTrackNumber: playlist.length > 1 ? 1 : 0,
      playing: false,
      volume: 0.5,
      muted: false,
      tracks: playlist,
      duration: 0,
      played: 0,
      loop: false,
    };
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
    // console.log('onDuration', duration);
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
    // this.player.seekTo(parseFloat(e.target.value));
    player.seekTo(parseFloat(e.target.value));
    // console.log(player.seekTo(parseFloat(e.target.value)));
  }

  handleProgress = (state) => {
    // console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  }

  handleTrackSelect = (id) => () => {
    this.setState({ currentTrackNumber: id });
  }

  handleOnEnded = () => {
    console.log('test');
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

  // handleMouseHower = (e) => {
  //   console.log(e);
  //   // if (!this.state.seeking) {
  //   //   this.setState(state)
  //   // }
  // }

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
      // nextTrackNumber
    } = this.state;

    return (
      <div className="container">
        {/* <Col xs={6} md={4}> */}
        {/* <Container> */}
      <Image src={tracks[currentTrackNumber].meta} rounded fluid width='100%'/>
      {/* </Container> */}
    {/* </Col> */}
        <AudioPlayer
          playing={playing}
          volume={volume}
          muted={muted}
          loop={loop}
          currentTrackNumber={currentTrackNumber}
          tracks={tracks}
          duration={duration}
          played={played}
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
        />
       <Table striped bordered hover variant="dark">
        <tbody>
          {tracks.map((track) => (<tr key={track.id} onClick={this.handleTrackSelect(track.id)} style={track.id === currentTrackNumber ? centerStyle : null}><td>{track.name}</td></tr>))}
        </tbody>
      </Table>
      </div>
    );
  }
}
