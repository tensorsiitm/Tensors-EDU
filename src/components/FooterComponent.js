import React from "react";
import { Link } from "react-router-dom";
import '../css/FooterComponent.css';

function Footer(props) {
  return (
    <div className="footer">
        <div className="row justify-content-center fback">
          <div className="col-4 offset-1 col-sm-2">
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
          <div className="col-7 col-sm-5">
            <h5>Get in Touch</h5>
            <h6>name: 878998789q0w7q <span><a href="#">&emsp;<i className="fa fa-phone"></i></a> &emsp;<a href="#"><i className="fa fa-whatsapp"></i></a></span></h6>
            <h6>name: 878998789q0w7q <span><a href="#">&emsp;<i className="fa fa-phone"></i></a> &emsp;<a href="#"><i className="fa fa-whatsapp"></i></a></span></h6>

          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center socic">
              <a
                className="btn"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook" />
              </a>
              &emsp;
              <a
                className="btn"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin" />
              </a>
              &emsp;
              <a
                className="btn"
                href="http://twitter.com/"
              >
                <i className="fa fa-instagram" />
                </a>
                &emsp;
              <a className="btn " href="mailto:">
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
  );
}

export default Footer;
