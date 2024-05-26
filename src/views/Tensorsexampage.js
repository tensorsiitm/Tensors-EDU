import React from "react";
import Footer from "../components/FooterComponent";
import Top from "../components/NavComponent";
import launch from "../assets/images/keam.png";
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
                                <h1>Tensors KEAM Mock Test</h1>
                                <br />
                                <p align="justify">
                                    Are you a KEAM Aspirant? Are you worried
                                    about how the online KEAM will be like? Do
                                    you want to practice based on the new exam
                                    pattern that CEE has proposed? Do you want
                                    to find out, how well are you standing out
                                    among all the KEAM Aspirants around Kerala?
                                </p>
                                <p align="justify">
                                    If you are having a YES to any of these
                                    questions,we have the right solution for
                                    you.
                                </p>
                                <p align="justify">
                                    We are Tensors, a group of passionate IITM
                                    students and the toppers of KEAM 2023 and
                                    2022. We are bringing you the Online "KEAM
                                    Mock Test" based on the new exam pattern.
                                    The Test Date is 1st June and it will
                                    consist of 150 Questions which have to be
                                    completed within 3 hours. Registration fee
                                    is just 99/- and you will get to compete
                                    with other aspirants all around Kerala. The
                                    Registration Deadline is 31st May.
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
                            <div className="mx-auto col-10 col-lg-8">
                                {/* <h1 className="text-center">
                                    Register Now to secure your spot!!
                                </h1> */}
                                <br />
                                <img
                                    src={launch}
                                    alt="launch"
                                    className="img-fluid img-border"
                                />
                                {/* <a
                                    style={{ textDecoration: "none" }}
                                    href="https://rzp.io/l/ZwGq3xL"
                                    target="_blank" rel="noreferrer"
                                > */}
                                <div className="button-wrapper">
                                    <button className="launchsubscribe" onClick={e => {
                                      e.preventDefault();
                                      window.open("https://rzp.io/l/ZwGq3xL", '_blank', 'noreferrer')
                                    }}>
                                        REGISTER
                                    </button>
                                </div>
                                {/* </a> */}
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
