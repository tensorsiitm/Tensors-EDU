import React from "react";
import Footer from "../components/FooterComponent";
import Top from "../components/NavComponent";
//import Countdown from "../components/CounterComponent";
import "../css/temp.css";
//import moment from "moment";

function Tensorsexam() {
  return (
    <React.Fragment>
      <Top />
      <div className="temp">
        <div className="row h-100">
          <div className="col-12 col-lg-6 yelside h-100">
            <div className="row middle1">
              <div className="col-8 offset-2">
                <h1>Tensors Exam</h1>
                <br />
                <p align="justify">
                  The annual Tensors mock JEE examination is the most awaited
                  nation wise pre-JEE examination for all serious JEE aspirants.
                  The question papers are designed and conducted by the
                  brightest minds of IIT Madras in line with the latest pattern.
                  The registration fee will be used to tackle social issues as
                  we are completing non-profit. The mains exam consists of one
                  three hour long paper while the Advanced paper is a
                  comprehensive two - 3 hour long paper. Grab this opportunity
                  to know where you stand among your peers and contribute
                  financially for a social cause.
                </p>
                <br />
                <h4>
                  <i>
                    {/*
                    <center>
                      Date of the Exam : 11<sup>th</sup> of July 2022.
                    </center>
                    */}
                  </i>
                </h4>
                {/* <br />
                <p>
                  Refer to{" "}
                  <NavLink to="/josaa" style={{ color: "#2F4F4F" }}>
                    Counselling page
                  </NavLink>{" "}
                  for more details on the bundle
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 bluside h-100">
            <div className="row middle2">
              <div className="col-12">
                <h3 className="text-center">Registrations Closed</h3>
                <br />
                {/*
                <center>
                  <a href="https://rzp.io/l/7nJVEfa6">
                    <button className="home-register-btn btn">
                      JEE Mains only
                      <br />
                      <span className="price-span">
                        <i className="fa fa-tag" style={{ color: "white" }}></i> Rs 100
                      </span>
                    </button>
                  </a>
                </center>
                <br />
                */}
                {/* <center>
                  <a href="https://rzp.io/l/pvrCVgB">
                    <button className="home-register-btn btn">
                      JEE Advanced
                      <br />
                      <span className="price-span">
                        <i className="fa fa-tag" style={{ color: "white" }}></i> Rs 100
                      </span>
                    </button>
                  </a>
                </center>
                <br /> */}
                {/*
                <center>
                  <a href="https://rzp.io/l/BQQdsJw7w">
                    <button className="home-register-btn btn">
                      JEE Main + Advanced
                      <br />
                      <span className="price-span">
                        <i className="fa fa-tag" style={{ color: "white" }}></i> Rs 150
                      </span>
                    </button>
                  </a>
                </center>
                <br />
                */}
                {/* <center>
                  <a href="https://rzp.io/l/ArqhDy3">
                    <button className="home-register-btn btn">
                      JOSAA Councelling
                      <br />
                      <span className="price-span">
                        <i className="fa fa-tag" style={{ color: "white" }}></i>{" "}
                        Rs 400
                      </span>
                    </button>
                  </a>
                </center> */}

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
