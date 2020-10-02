import React from 'react';
import Footer from '../components/FooterComponent';
import Top from '../components/NavComponent';
import '../css/temp.css';
import {Modal} from "react-bootstrap";
import launch from '../assets/images/launch.svg'
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

function Mentorship(props){

        const [modalShow, setModalShow] = React.useState(false);
        return(
            <React.Fragment>
           <Top />
           <div className="temp">
           <div className="row h-100">
           <div className="col-12 col-lg-6 yelside h-100">
           <div className="row middle1">
           <div className="col-8 offset-2">
           <p align="justify">
           The Tensors mentorship programme has been designed by IITians to help you crack JEE with continuous guidance throughout the year.
           All the registered students will be assigned mentors who will provide doubt clearance, motivation and guidance throughout the year to help you in your studies. This one-on-one communication is unique to Tensors and it’ll be instrumental in converting the final exam.
           </p>
           </div>
           </div>
           </div>
           <div className="col-12 col-lg-6 bluside h-100">
           <div className="row middle2">
           <div className="col-8 offset-2">
           <h1 className="text-center">Launching Soon..</h1>
           <img src={launch} className="img-fluid "/>
           <h5>Subscribe to our news letter to get instant updates.</h5>
           <button className="launchsubscribe"  onClick={() => setModalShow(true)}>SUBSCRIBE</button>
           <SubscribeModal show={modalShow} onHide={() => setModalShow(false)} />
           </div>
           </div>
           </div>
           </div>
           </div>
           <Footer />
           </React.Fragment>
        );

}

export default Mentorship;