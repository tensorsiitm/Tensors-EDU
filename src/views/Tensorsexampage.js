import React from "react";
import Footer from "../components/FooterComponent";
import Top from "../components/NavComponent";
import Countdown from "../components/CounterComponent";
import "../css/temp.css";
import moment from "moment";
import { NavLink } from "react-router-dom";

function Tensorsexam(props) {
  return (
    <React.Fragment>
      <Top />
      <div className="temp">
        <div className="row h-100">
          <div className="col-12 col-lg-6 yelside h-100">
            <div className="row middle1">
              <div className="col-8 offset-2">
                <h1>Tensors Exam</h1>
                <p align="justify">
                  The annual Tensors mock JEE examination is the most awaited
                  pre-JEE examination for all serious JEE aspirants and coaching
                  institutes in India. The question papers are designed as well
                  as conducted by IITians who have demonstrated their skill in
                  cracking the JEE. The mains exam consists of one three hour
                  long paper while the Advanced paper is a comprehensive two - 3
                  hour long paper.
                </p>
                <br />
                <p>
                  Refer to{" "}
                  <NavLink to="/josaa" style={{ color: "#2F4F4F" }}>
                    Counselling page
                  </NavLink>{" "}
                  for more details on the bundle
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 bluside h-100">
            <div className="row middle2">
              <div className="col-12">
                <h3 className="text-center">Registrations Closed</h3>
                <br />
                <center>
                  <a href="#">
                    <button className="home-register-btn btn" disabled>
                      JEE Advanced
                      <br />
                      <span className="price-span">
                        <i className="fa fa-tag" style={{ color: "white" }}></i>{" "}
                        Rs 100
                      </span>
                    </button>
                  </a>
                </center>
                <br />
                <center>
                  <a href="#">
                    <button className="home-register-btn btn" disabled>
                      Counselling
                      <br />
                      <span className="price-span">
                        <i className="fa fa-tag" style={{ color: "white" }}></i>{" "}
                        Rs 400
                      </span>
                    </button>
                  </a>
                </center>
                <br />
                <center>
                  <a href="#">
                    <button className="home-register-btn btn" disabled>
                      Counselling + Advanced
                      <br />
                      <span className="price-span">
                        <i className="fa fa-tag" style={{ color: "white" }}></i>{" "}
                        Rs 450
                      </span>
                    </button>
                  </a>
                </center>
                <br />

                {/* <center><button className="home-register-btn btn"><a href="https://rzp.io/l/9IMypKk4">Register Now</a></button></center> */}
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
