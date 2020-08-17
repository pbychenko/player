import React from 'react';
import ReactPlayer from 'react-player';
import { Nav } from 'react-bootstrap';
import { PlayerIcon } from 'react-player-controls';
import VolumeSlider from './VolumeSlider.jsx';

const AudioPlayer = (props) => {
  const {
    playing,
    volume,
    muted,
    onPlayPauseAction,
    onMuteAction,
    currentTrackNumber,
    onNextTrackAction,
    onPrevTrackAction,
    tracks,
    duration,
    onDuration,
    onVolumeChange,
  } = props;
  console.log(duration);

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
        onDuration={onDuration}
        onSeek={e => console.log('onSeek', e)}
        />
        <Nav activeKey="/home">
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
              <input type='range' min={0} max={1} step='any' value={volume} onChange={onVolumeChange}/>
            </div>
          </Nav.Item>
        </Nav>
        {/* <div className="container justify-content-center">
          <input type='range' min={0} max={duration} step='any' value={played} onChange={onVolumeChange}/>
        </div> */}
      </div>
      </>
  );
};

export default AudioPlayer;
