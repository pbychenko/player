import React from 'react';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

import { FormattedTime, PlayerIcon } from 'react-player-controls';
// import Playlist from './Playlist.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentTrack: {},
      volume: 0,
      loop: false,
    };
  }

  render() {
    return (
      <>
        <div className="container justify-content-center">{/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
        <ReactPlayer url='../public/Naprosilas__kiska.mp4' 
        // {/* className='react-player'
        // width='50%'
        // height='50%'
        // // url={url}
        // // pip={pip}
        // playing={false} */}
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
        
         
         <FormattedTime
            numSeconds={100}
          />
          {/* <PlayerIcon.Play width={32} height={32} style={{ marginRight: 32 }} />
<PlayerIcon.Pause width={32} height={32} style={{ marginRight: 32 }} />

<PlayerIcon.Next width={32} height={32} style={{ marginRight: 32 }} />
<PlayerIcon.SoundOn width={32} height={32} style={{ marginRight: 32 }} />
<PlayerIcon.SoundOff width={32} height={32} style={{ marginRight: 32 }} />
 <Playlist /> */}
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
