import React from 'react';
import ReactPlayer from 'react-player';
import { Form } from 'react-bootstrap';
import ControlPanel from './ControlPanel.jsx';


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
    } = this.props;
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
          <ControlPanel
            playing={playing}
            volume={volume}
            muted={muted}
            loop={loop}
            onPlayPauseAction={onPlayPauseAction}
            onMuteAction={onMuteAction}
            onRepeateAction={onRepeateAction}
            onNextTrackAction={onNextTrackAction}
            onPrevTrackAction={onPrevTrackAction}
            currentTrackNumber={currentTrackNumber}
            tracks={tracks}
            duration={duration}
            played={played}
            onVolumeChange={onVolumeChange}
          />
           <Form.Control type="range" min={0} max={1} step='any' value={played} onChange={onSeekChange}
            onMouseDown={onSeekMouseDown} onMouseUp={onSeekMouseUp(this.player)} style={{ marginTop: 32 }}
            // onMouseMove ={onHover}
            />
        </div>
        </>
    );
  }
}

export default AudioPlayer;
