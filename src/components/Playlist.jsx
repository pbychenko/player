import React from 'react';
import { Table } from 'react-bootstrap';

// const AudioPlayer = (props) => {
class Playlist extends React.Component {
  // ref = player => {
  //   this.player = player;
  // }

  render() {
    const {
      // playing,
      // volume,
      // muted,
      // onPlayPauseAction,
      // onMuteAction,
      // currentTrackNumber,
      // onNextTrackAction,
      // onPrevTrackAction,
      tracks,
      // duration,
      // onDuration,
      // onVolumeChange,
      // onSeekChange,
      // onSeekMouseDown,
      // onSeekMouseUp,
      // played,
      // onProgressChange,
      // onHover
    } = this.props;
    // console.log(tracks);
    return (
      <Table striped bordered hover variant="dark">
  {/* <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead> */}
  <tbody>
    {tracks.map((track) => (<tr key={track.id}><td>{track.name}</td></tr>))}
  </tbody>
</Table>
    );
  }
}

export default Playlist;
