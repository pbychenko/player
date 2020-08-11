import React from 'react';
import ReactPlayer from 'react-player';
import { Nav } from 'react-bootstrap';
import { PlayerIcon } from 'react-player-controls';

const AudioPlayer = () => {
  // const tracks = playlist;
  // render() {
    // const { tracks, currentTrack } = this.props
    return (
      <>
      <div className="container justify-content-center">{/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
      <ReactPlayer 
        url='../../public/Naprosilas__kiska.mp4'
        width='50%'
        height='50%'
        playing={false}
        controls={false} 
       />
        <Nav activeKey="/home">
          <Nav.Item>
            {/* <Nav.Link href="/home">Active</Nav.Link> */}
            <PlayerIcon.Previous width={32} height={32} style={{ marginRight: 32 }} />
          </Nav.Item>
          <Nav.Item>
          <PlayerIcon.Play width={32} height={32} style={{ marginRight: 32 }}/>
            {/* <Nav.Link eventKey="link-1">Link</Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link eventKey="link-2">Link</Nav.Link> */}
            <PlayerIcon.Next width={32} height={32} style={{ marginRight: 32 }} />
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link> */}
            <PlayerIcon.SoundOn width={32} height={32} style={{ marginRight: 32 }} />
          </Nav.Item>
        </Nav>
       </div>
       </>
  );
};

export default AudioPlayer;
