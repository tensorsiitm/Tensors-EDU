import React from 'react';
import Footer from '../components/FooterComponent';
import Top from '../components/NavComponent';
import '../css/temp.css';
import {Modal} from "react-bootstrap";
import launch from '../assets/images/launch.svg'

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
        <section class="row mt-3 mb-3 text-center">
        <div class="col-md-6 m-auto">
          <h1 class="display-4 mb-3">Newsletter Signup</h1>
          <p class="lead">
            Fill in your details to receive updates from Tensors
          </p>
          <form action="/subscribe" method="POST">
            <div class="form-group">
              <input type="text" name="firstName" id="first-name" class="form-control" placeholder="First Name"
                required />
            </div>
            <div class="form-group">
              <input type="text" name="lastName" id="last-name" class="form-control" placeholder="Last Name" required />
            </div>
            <div class="form-group">
              <input type="email" name="email" id="email" class="form-control" placeholder="Email" required />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Subscribe
            </button>
          </form>
          <div className="row">
          <div className="col-12">
            <p>Get in touch with us through</p>
              <div className="socicmodal">
                <a
                  className="btn"
                  href="https://www.facebook.com/tensorsofficial"
                >
                  <i className="fa fa-facebook" />
                </a>
                &emsp;
                <a
                  className="btn"
                  href="https://www.linkedin.com/company/53201198"
                >
                  <i className="fa fa-linkedin" />
                </a>
                &emsp;
                <a
                  className="btn"
                  href="https://www.instagram.com/tensors_official/"
                >
                  <i className="fa fa-instagram" />
                  </a>
                  &emsp;
                <a className="btn " href="mailto:tensorsofficial@gmail.com">
                  <i className="fa fa-envelope-o" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
       <p align="justify">
       The annual Tensors mock JEE examination is the most awaited end-of-the-year JEE examination in all major coaching institutes in South India. The questions papers are designed and conducted by IITians who have demonstrated their skill in cracking the JEE. There are two three-hour-long examinations for the JEE Mains and Advanced respectively.       </p>
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

export default Tensorsexam;