import React from 'react';
import ReactPlayer from 'react-player';
import { Nav } from 'react-bootstrap';
import { PlayerIcon, Slider, Direction } from 'react-player-controls';

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
  } = props;
  
  console.log(duration);
//   const WHITE_SMOKE = '#eee'
// const GRAY = '#878c88'
// const GREEN = '#72d687'

// A colored bar that will represent the current value
// const SliderBar = ({ direction, value, style }) => (
//   <div
//     style={Object.assign({}, {
//       position: 'absolute',
//       background: GRAY,
//       borderRadius: 4,
//     }, direction === Direction.HORIZONTAL ? {
//       top: 0,
//       bottom: 0,
//       left: 0,
//       width: `${value * 100}%`,
//     } : {
//       right: 0,
//       bottom: 0,
//       left: 0,
//       height: `${value * 100}%`,
//     }, style)}
//   />
// )

// A handle to indicate the current value
// const SliderHandle = ({ direction, value, style }) => (
//   <div
//     style={Object.assign({}, {
//       position: 'absolute',
//       width: 16,
//       height: 16,
//       background: GREEN,
//       borderRadius: '100%',
//       transform: 'scale(1)',
//       transition: 'transform 0.2s',
//       '&:hover': {
//         transform: 'scale(1.3)',
//       }
//     }, direction === Direction.HORIZONTAL ? {
//       top: 0,
//       left: `${value * 100}%`,
//       marginTop: -4,
//       marginLeft: -8,
//     } : {
//       left: 0,
//       bottom: `${value * 100}%`,
//       marginBottom: -8,
//       marginLeft: -4,
//     }, style)}
//   />
// )

// A composite progress bar component
// const ProgressBar = ({ isEnabled, direction, value, ...props }) => (
//   <Slider
//     isEnabled={isEnabled}
//     direction={direction}
//     onChange={newValue => console.log(`clicked at ${newValue}`)}
//     style={{
//       width: direction === Direction.HORIZONTAL ? 200 : 8,
//       height: direction === Direction.HORIZONTAL ? 8 : 130,
//       borderRadius: 4,
//       background: WHITE_SMOKE,
//       transition: direction === Direction.HORIZONTAL ? 'width 0.1s' : 'height 0.1s',
//       cursor: isEnabled === true ? 'pointer' : 'default',
//     }}
//     {...props}
//   >
//     <SliderBar direction={direction} value={value} style={{ background: isEnabled ? GREEN : GRAY }} />
//     <SliderHandle direction={direction} value={value} style={{ background: isEnabled ? GREEN : GRAY }} />
//   </Slider>
// );
  //'../../public/track1.mp3'
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
      </Nav>
      {/* <ProgressBar
        isEnabled={true}
        direction={Direction.HORIZONTAL}
        value={currentTime / currentSong.duration}
        onChange={value => seek(value * currentSong.duration)}
      /> */}
      </div>
      </>
  );
};

export default AudioPlayer;
