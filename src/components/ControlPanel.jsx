import React from 'react';
import { Nav } from 'react-bootstrap';
import { PlayerIcon, Button, FormattedTime } from 'react-player-controls';

const iconStyle = {
  marginRight: 32,
  height: 32,
  width: 32,
};

const ControlPanel = (props) => {
  const {
    playing,
    muted,
    volume,
    currentTrackNumber,
    onPlayPauseAction,
    onMuteAction,
    onRepeateAction,
    onNextTrackAction,
    onPrevTrackAction,
    tracks,
    onVolumeChange,
    loop,
    duration,
    played,
  } = props;
  return (
    <>
    <Nav className="mr-auto">
      <Nav.Item onClick={onPrevTrackAction}>
        <PlayerIcon.Previous style={iconStyle} />
      </Nav.Item>
      <Nav.Item onClick={onPlayPauseAction}>
        {playing ? (<PlayerIcon.Pause style={iconStyle} />)
          : (<PlayerIcon.Play style={iconStyle} />)}
      </Nav.Item>
      <Nav.Item onClick={onNextTrackAction}>
        <PlayerIcon.Next style={iconStyle} />
      </Nav.Item>
      <Nav.Item onClick={onMuteAction}>
        {!muted ? (<PlayerIcon.SoundOn width={32} height={32} style={{ marginRight: 32 }} />)
          : (<PlayerIcon.SoundOff style={iconStyle} />)}
      </Nav.Item>
      <Nav.Item >
        <div className="container justify-content-center">
          <input type='range' min={0} max={1} step='any' value={volume} onChange={onVolumeChange} style={{ marginTop: 12 }} />
        </div>
      </Nav.Item>
      <Nav.Item >
        <Button width={32} height={32} style={loop ? { color: 'red' } : { color: 'green' } } onClick={onRepeateAction}> Repeate </Button>
      </Nav.Item>
      <Nav.Link href={tracks[currentTrackNumber].src} download>Скачать файл</Nav.Link>
    </Nav>
    <FormattedTime
      numSeconds={duration * played}
    />
    </>
  );
};

export default ControlPanel;
