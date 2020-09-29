import React from "react";
import { Link } from "react-router-dom";
import '../css/FooterComponent.css';
import {Modal} from "react-bootstrap";

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
                <Link to="/josaa">Josaa</Link>
              </li>
              <li>
                <Link to="/tensorsexam">Tensors Exam</Link>
              </li>
            </ul>
          </div>
          <div className="col-10 offset-1 offset-sm-0 col-sm-6 col-lg-3">
            <h5>Get in Touch</h5>
            <h6>name: 878998789q0w7q <span><a href="#">&emsp;<i className="fa fa-phone"></i></a> &emsp;<a href="#"><i className="fa fa-whatsapp"></i></a></span></h6>
            <h6>name: 878998789q0w7q <span><a href="#">&emsp;<i className="fa fa-phone"></i></a> &emsp;<a href="#"><i className="fa fa-whatsapp"></i></a></span></h6>
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
      <div className="col-auto">
        <p>© Copyright 2020 Tensors</p>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Footer;
