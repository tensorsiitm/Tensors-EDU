import React from "react";
import { Link } from "react-router-dom";
import '../css/FooterComponent.css';
import {Modal} from "react-bootstrap";
import Iframe from 'react-iframe';

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

function Footer(props) {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="footer">
    <div className="row">
    <div className="col-12">
        <div className="row justify-content-center fback">
          <div className="col-10 offset-1 col-sm-5 col-lg-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/testseries">Test Series</Link>
              </li>
              <li>
                <Link to="/mentorship">Mentorship</Link>
              </li>
              <li>
                <Link to="/josaa">Counselling</Link>
              </li>
              <li>
                <Link to="/tensorsexam">Tensors Exam</Link>
              </li>
            </ul>
          </div>
          <div className="col-10 offset-1 offset-sm-0 col-sm-6 col-lg-3">
            <h5>Get in Touch</h5>
            <h6>Anfas Nujum K: +91 8157925677 <span><a href="tel:+91-8157925677">&emsp;<i className="fa fa-phone"></i></a> &emsp;<a href="https://api.whatsapp.com/send?phone=918157925677"><i className="fa fa-whatsapp"></i></a></span></h6>
            <h6>Faseeh Ahmed: +91 7034073143 <span><a href="tel:+91-7034073143">&emsp;<i className="fa fa-phone"></i></a> &emsp;<a href="https://api.whatsapp.com/send?phone=917034073143"><i className="fa fa-whatsapp"></i></a></span></h6>
          </div>
          <div className="col-10 offset-1 col-sm-5  col-lg-3 offset-lg-0">
          <h5>News Letter</h5>
          <h6>Subscribe to our newsletter to get monthly updates straight to your inbox</h6>
          <button className="boxbottom"  onClick={() => setModalShow(true)}>SUBSCRIBE</button>
          <SubscribeModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
          <div className="col-10 offset-1 offset-sm-0 col-sm-6 col-lg-3">
          <h5>Get Social</h5>
            <div className="socic">
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
      <div className="row justify-content-center cright">
      <div className="col-12 text-center">
        <p>© Copyright 2020 Tensors</p>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Footer;
