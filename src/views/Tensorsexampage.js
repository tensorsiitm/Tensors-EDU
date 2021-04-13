import React from 'react';
import Footer from '../components/FooterComponent';
import Top from '../components/NavComponent';
import Countdown from '../components/CounterComponent';
import '../css/temp.css';
import {Modal} from "react-bootstrap";
import launch from '../assets/images/launch.svg';
import Iframe from 'react-iframe'

function SubscribeModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Iframe url="https://tensors-newsletter.herokuapp.com/" width="100%" height="600px"></Iframe>
        </Modal.Body>
      </Modal>
    );
  }

function Tensorsexam(props){
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <React.Fragment>
       <Top />
       <div className="temp">
       <div className="row h-100">
       <div className="col-12 col-lg-6 yelside h-100">
       <div className="row middle1">
       <div className="col-8 offset-2">
       <h1>Tensors Exam</h1>
       <p align="justify">
       The annual Tensors mock JEE examination is the most awaited end-of-the-year JEE examination in all major coaching institutes in South India. The questions papers are designed and conducted by IITians who have demonstrated their skill in cracking the JEE. There are two three-hour-long examinations for the JEE Mains and Advanced respectively.       </p>
       </div>
       </div>
       </div>
       <div className="col-12 col-lg-6 bluside h-100">
       <div className="row middle2">
       <div className="col-12 ml-3">
       <h1>REGISTRATION</h1>
         <br/><br/>
       <span><Countdown timeTillDate="05 13 2021, 12:30 pm" timeFormat="MM DD YYYY, hh:mm a"/></span>
       <br/><br/>
       <center><button className="home-register-btn btn" disabled>Register Now</button></center>
       </div>
       </div>
       </div>
       </div>
       </div>
       <Footer />
       </React.Fragment>
    );

    
}

export default Tensorsexam;