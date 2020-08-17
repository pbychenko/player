import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AudioPlayer from './AudioPlayer.jsx';
import playlist from '../playlist';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentTrack: playlist[1],
      currentTrackNumber: 0,
      playing: false,
      volume: 0.5,
      muted: false,
      tracks: playlist,
      duration: 0,
      played: 0,
      // loop: false,
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

  handleSeekMouseDown = e => {
    this.setState({ seeking: true });
  }

  handleSeekMouseUp = (player) => e => {
    this.setState({ seeking: false });
    // this.player.seekTo(parseFloat(e.target.value));
    player.seekTo(parseFloat(e.target.value));
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
    } = this.state;
    // console.log(duration, played);
  
    return (
      <>
        <AudioPlayer
         playing={playing}
         volume={volume}
         muted={muted}
         onPlayPauseAction={this.handlePlayPause}
         onMuteAction={this.handleMuteAction}
         onNextTrackAction={this.handleNextTrackAction}
         onPrevTrackAction={this.handlePrevTrackAction}
         currentTrackNumber={currentTrackNumber}
         tracks={tracks}
         duration={duration}
         played={played}
         onDuration={this.handleDuration}
         onSeekChange={this.handleSeekChange}
         onSeekMouseDown={this.handleSeekMouseDown}
         onSeekMouseUp={this.handleSeekMouseUp}
         onVolumeChange={this.handleVolumeChange} />
      </>
    );
  }
}

// import axios from 'axios';
// import { Jumbotron, Spinner, Alert } from 'react-bootstrap';
// import React from 'react';
// import Card from './Card.jsx';
// import MyModal from './MyModal.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const baseUrl = 'https://boiling-refuge-66454.herokuapp.com/images';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       activePictureData: null,
//       requestState: '',
//       showModal: false,
//       showErrorBlock: false,
//       form: {
//         name: '',
//         comment: '',
//         // validCommentsState: 'invalid',
//       },
//     };
//   }

//   async componentDidMount() {
//     this.setState(() => ({ requestState: 'processing' }));
//     try {
//       const res = await axios.get(baseUrl);
//       this.setState(() => ({ requestState: 'success', items: res.data }));
//     } catch (error) {
//       this.setState(() => ({ requestState: 'failed', showErrorBlock: true }));
//       throw error;
//     }
//   }

//   // componentDidMount() {
//   //   this.setState({ requestState: 'processing' }, () => this.getDataRequest());
//   // }

//   // getDataRequest = (id) => {
//   //   const uri = baseUrl + (id ? `/${id}` : '');
//   //   // Думаю, лучше показать понимание принципиального момента:
//   //   // setState() работает асинхронно!
//   //   // В данном случае это не играет роли,
//   //   // смена requestState произойдет быстрее, чем придет ответ на запрос.
//   //   this.setState({ requestState: 'processing' }, async () => {
//   //     try {
//   //       const res = await axios.get(uri);
//   //       this.setState({
//   //         requestState: 'success',
//   //         ...(!id && { items: res.data }),
//   //         ...(id && {
//   //           activePictureData: res.data,
//   //           showModal: true,
//   //         }),
//   //       });
//   //     } catch (error) {
//   //       this.setState({ requestState: 'failed', showErrorBlock: true });
//   //       throw error;
//   //     }
//   //   });
//   // };

//   handleClick = (id) => async () => {
//     try {
//       this.setState({ requestState: 'processing' });
//       const res = await axios.get(`${baseUrl}/${id}`);
//       this.setState({ requestState: 'success', activePictureData: res.data, showModal: true });
//     } catch (error) {
//       this.setState({ requestState: 'failed', showErrorBlock: true });
//       throw error;
//     }
//   }

//   renderPictures = () => {
//     const { items } = this.state;
//     return (
//       items.map((el) => <Card key={el.id} src={el.url} onClickAction={this.handleClick(el.id)}/>)
//     );
//   }

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     const { form } = this.state;
//     this.setState({ form: { ...form, [name]: value } });
//     // console.log(form.name);
//     // console.log(form.comment);
    
//     // if (form.name !== '' && form.comment !== '') {
//     //   this.setState({ form: { ...form, validCommentsState: 'valid'} });
//     // } else {
//     //   this.setState({ form: { ...form, [name]: value, validCommentsState: 'invalid'} });
//     // }
//   }

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, comment } = this.state.form;
//     const { id } = this.state.activePictureData;

//     try {
//       this.setState({ requestState: 'processing' });
//       await axios.post(`${baseUrl}/${id}/comments`, { name, comment });
//       // this.setState({ requestState: 'success', form: { name: '', comment: '', validCommentsState: 'invalid' }, showModal: false });
//       this.setState({ requestState: 'success', form: { name: '', comment: '' }, showModal: false });
//     } catch (error) {
//       this.setState({ requestState: 'failed', showErrorBlock: true });
//       throw error;
//     }
//   };

//   renderModal = () => {
//     const { showModal, form, activePictureData } = this.state;
//     // console.log(form.validCommentsState);    

//     if (activePictureData) {
//       return (
//       <MyModal show={showModal} data={activePictureData} onFormChange={this.handleChange}
//        onFormSubmit={this.handleSubmit} formData={form} onHide={this.handleCloseModal} validCommentsState={form.validCommentsState}/>
//       );
//     }

//     return null;
//   }

//   handleCloseModal = () => {
//     this.setState({ showModal: false, form: { name: '', comment: '' } });
//   }

//   handleShowModal = () => {
//     this.setState({ showModal: true });
//   }

//   render() {
//     const centerStyle = {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       minHeight: '100vh',
//     };
//     const spinnerSizeStyle = {
//       width: '13rem',
//       height: '13rem',
//     };
//     const { requestState } = this.state;
//     // console.log(this.state.form);

//     if (requestState === 'processing') {
//       return (<div className="text-center" style={centerStyle}><Spinner animation="border" style={spinnerSizeStyle} /></div>);
//     }
//     if (requestState === 'success') {
//       return (
//         <>
//         <Jumbotron className="text-center">
//           <h1>TEST APP</h1>
//         </Jumbotron>
//         <div className="container">
//           <div className="row justify-content-center">
//             {this.renderPictures()}
//           </div>
//           {this.renderModal()}
//         </div>
//       </>
//       );
//     }
//     return (
//       <>
//         <Jumbotron className="text-center">
//           <h1>TEST APP</h1>
//         </Jumbotron>
//         <Alert variant='info' className="text-center">
//           Something wrong with newtwork please try later
//         </Alert>
//       </>
//     );
//   }
// }
