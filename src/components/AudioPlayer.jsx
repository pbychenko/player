import React from 'react';
import ReactPlayer from 'react-player';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { PlayerIcon, FormattedTime, Button } from 'react-player-controls';


// const AudioPlayer = (props) => {
class AudioPlayer extends React.Component {
  ref = player => {
    this.player = player;
  }

  render() {
    const {
      playing,
      volume,
      muted,
      onPlayPauseAction,
      onMuteAction,
      onRepeateAction,
      currentTrackNumber,
      onNextTrackAction,
      onPrevTrackAction,
      tracks,
      duration,
      onDuration,
      onVolumeChange,
      onSeekChange,
      onSeekMouseDown,
      onSeekMouseUp,
      played,
      onProgressChange,
      onEnded,
      loop,
      // onHover
    } = this.props;
    // console.log(played*10000));
    return (
      <>
      <div className="container justify-content-center">  {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
        <ReactPlayer
          url={tracks[currentTrackNumber].src}
          width='50%'
          height='50%'
          playing={playing}
          volume={volume}
          pip={true}
          muted={muted}
          loop={loop}
          onDuration={onDuration}
          onEnded={onEnded}
          ref={this.ref}
          onProgress={onProgressChange}
          onSeek={e => console.log('onSeek', e)}
          />
          {/* <Container> */}
          <Navbar variant="dark">
          <Nav className="mr-auto">
            <Nav.Item onClick={onPrevTrackAction}>
              <PlayerIcon.Previous width={32} height={32} style={{ marginRight: 32 }} />
            </Nav.Item>
            <Nav.Item onClick={onPlayPauseAction}>
              {playing ? (<PlayerIcon.Pause width={32} height={32} style={{ marginRight: 32 }}/>) : (<PlayerIcon.Play width={32} height={32} style={{ marginRight: 32 }}/>)}
            </Nav.Item>
            <Nav.Item onClick={onNextTrackAction}>
              <PlayerIcon.Next width={32} height={32} style={{ marginRight: 32 }} />
            </Nav.Item>
            <Nav.Item onClick={onMuteAction}>
              {!muted ? (<PlayerIcon.SoundOn width={32} height={32} style={{ marginRight: 32 }} />) : (<PlayerIcon.SoundOff width={32} height={32} style={{ marginRight: 32 }} />)}
            </Nav.Item>
            <Nav.Item >
              <div className="container justify-content-center">
                <input type='range' min={0} max={1} step='any' value={volume} onChange={onVolumeChange} style={{ marginTop: 12 }} />
              </div>
            </Nav.Item>
            <Nav.Item >
              <Button width={32} height={32} style={loop ? {color: 'red'} : {color: 'green'} } onClick={onRepeateAction}> Repeate </Button>
            </Nav.Item>
            <Nav.Link href={tracks[currentTrackNumber].src} download>Скачать файл</Nav.Link>
          </Nav>
          </Navbar>
          {/* </Container> */}
          {/* <div className="container justify-content-center">
            <input type='range' min={0} max={1} step='any' value={played} onChange={onSeekChange}
            onMouseDown={onSeekMouseDown} onMouseUp={onSeekMouseUp(this.player)}
            // onMouseMove ={onHover}
              />
          </div> */}
          {/* <div className="container"> */}
           <Form.Control type="range" min={0} max={1} step='any' value={played} onChange={onSeekChange}
            onMouseDown={onSeekMouseDown} onMouseUp={onSeekMouseUp(this.player)} style={{ marginTop: 32 }}
            // onMouseMove ={onHover}
            />
            {/* </div> */}
          <FormattedTime
            numSeconds={duration * played}
          />
        </div>
        </>
    );
  }
}

export default AudioPlayer;
