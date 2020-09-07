import React from 'react';
import { Nav, Image, Navbar } from 'react-bootstrap';
import { PlayerIcon } from 'react-player-controls';

const iconStyle = {
  marginRight: '22',
  height: '22',
  width: '22',
};

const controlStyle = {
  marginTop: '15px',
  marginLeft: '-15px',
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
    onMouseEnter,
    onMouseLeave,
    volumeRangeShown,
  } = props;
  return (
    <>
      <Navbar bg="light">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={controlStyle}>
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
          </Nav>
          <Nav style={controlStyle} className='volume' >
            <Nav.Item onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
              {!muted ? (<PlayerIcon.SoundOn style={iconStyle} onClick={onMuteAction} />)
                : (<PlayerIcon.SoundOff style={iconStyle} onClick={onMuteAction} />)}
              {volumeRangeShown && (
              <div className="slider-wrapper">
                <input type='range' min={0} max={1} step='any' value={volume} onChange={onVolumeChange}  />
              </div>
            )}
            </Nav.Item>
            <Nav.Item style={{ marginRight: '22px' }}>
              <Image src='../../public/resetIcon.jpg' height={24} width={24} onClick={onRepeateAction} style={loop ? { opacity: 1 } : { opacity: 0.5 } } />
            </Nav.Item>
            <Nav.Item >
              <Nav.Link href={tracks[currentTrackNumber].src} download style={{ padding: 0 }}>
                <Image src='../../public/downloadIcon.jpg' height={24} width={24} />
              </Nav.Link>
            </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
  );
};

export default ControlPanel;
