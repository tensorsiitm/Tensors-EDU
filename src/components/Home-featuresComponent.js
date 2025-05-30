import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import a1 from "../assets/images/a1.svg";
import a2 from "../assets/images/a2.svg";
import a3 from "../assets/images/a3.svg";
import a4 from "../assets/images/a4.svg";
import tlogo from "../assets/images/logof.png";
// import poster from "../assets/images/jeeadv_poster.png";
// import launch from "../assets/images/josaa.png";
import launch from '../assets/images/jeeadv.jpg'
import "../css/Home-featuresComponent.css";
import { Parallax } from "react-scroll-parallax";
//import { Link } from "react-scroll";
import { Modal } from "react-bootstrap";

function Homefeatures() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={launch} alt="poster" className="img-fluid " />
                </Modal.Body>
                <Modal.Footer>
                    <div className="buttons">
                    <a
                        className="btn btn-secondary"
                        href="https://rzp.io/rzp/yMAc3sB"
                        rel="noopener noreferrer"
                    >
                        Register
                    </a>
                    <a
                        className="btn-secondary"
                        href="#/jeeadv"
                        rel="noopener noreferrer"
                    >
                        Know more
                    </a>
                    </div>
                </Modal.Footer>
            </Modal>

            <div className="particlebg">
                <div className="row">
                    <div className="col-12 col-lg-6 order-lg-first order-last">
                        <div className="row r1 d-none d-lg-block"></div>
                        <div className="row r2 d-none d-lg-block">
                            <div className="col-10 offset-2">
                                <h5>Welcome to Tensors EDU</h5>
                                <h1>
                                    Look no further for your{" "}
                                    <span className="gre">ENGINEER</span>{" "}
                                    queries - you've arrived at the perfect
                                    destination for expert answers
                                    <span className="gre">!</span>
                                </h1>
                                <div>
                                <NavLink
                                    to="/jee"
                                    className="main-register-btn btn-block text-center"
                                >
                                    Register Now For JEE Mock Test 
                                </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="row r3 d-none d-lg-block">
                            <div className="col-6 offset-2 d-none d-lg-block">
                                <img
                                    src={tlogo}
                                    alt="logo"
                                    className="img-fluid "
                                />
                            </div>
                        </div>
                        <Parallax
                            className="custom-class"
                            y={[-30, 0]}
                            tagOuter="figure"
                        >
                            <div className="row">
                                <div className="col-6 offset-3 d-none d-lg-block a1i">
                                    <img
                                        src={a3}
                                        alt="featureImage"
                                        className="img-fluid "
                                    />
                                </div>
                            </div>
                        </Parallax>
                        <Parallax
                            className="custom-class"
                            y={[30, 0]}
                            tagOuter="figure"
                        >
                            <div className="row a2">
                                <div className="col col-10 offset-1 col-lg-8 offset-lg-1">
                                    <h2 align="justify">
                                        A{" "}
                                        <span className="green">
                                            TEST SERIES{" "}
                                        </span>
                                        to keep you coordinated throughout the
                                        year as you prepare for
                                        <span className="green"> JEE</span>
                                    </h2>
                                    <p align="justify">
                                        Embark on a year-long journey of
                                        excellence with the Tensors Mentorship
                                        Program, designed to empower JEE
                                        aspirants in +1 and +2. Enroll today and
                                        gain access to our comprehensive test
                                        series, your ultimate tool for success!{" "}
                                    </p>
                                    <h6 className="descund pb-2">
                                        TEST SERIES
                                    </h6>
                                </div>
                            </div>
                        </Parallax>
                        <Parallax
                            className="custom-class"
                            y={[-30, 0]}
                            tagOuter="figure"
                        >
                            <div className="row">
                                <div className="col-6 offset-3 d-none d-lg-block a3i">
                                    <img
                                        src={a2}
                                        alt="featureImage"
                                        className="img-fluid "
                                    />
                                </div>
                            </div>
                        </Parallax>
                        <Parallax
                            className="custom-class"
                            y={[30, 0]}
                            tagOuter="figure"
                        >
                            <div className="row a4">
                                <div className="col col-10 offset-1 col-lg-8 offset-lg-1">
                                    <h2 align="justify" id="a1">
                                        Pondering the{" "}
                                        <span className="green">
                                            ideal engineering branch?{" "}
                                        </span>
                                        Let's navigate the maze and find
                                        your perfect fit!
                                    </h2>
                                    <p align="justify">
                                        For most students, this answer comes
                                        from either their parents, their
                                        coaching institutes, or online forums.
                                        The Tensors team is passionate of
                                        helping you make the right choice
                                        regarding both your dream branch and
                                        institute. Explore our counselling
                                        programme to know more about how to
                                        avail the service.
                                    </p>
                                    {/* <h6 className="descund pb-2">
                                        KNOW YOUR BRANCH
                                    </h6> */}
                                    <NavLink
                                        className="btn-secondary"
                                        to="/josaa"
                                    >
                                        Know More..
                                    </NavLink>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row r2 d-lg-none d-block">
                            <div className="col-10 offset-1">
                                <h5>Welcome to Tensors Edu</h5>
                                <h1>
                                    So you’ve decided to become an{" "}
                                    <span className="gre">ENGINEER</span> and
                                    looking for a place to get your questions
                                    answered. Well your search ends here
                                    <span className="gre">!</span>
                                </h1>
                                <NavLink
                                    to="/tensorsexam"
                                    className="main-register-btn btn-block text-center"
                                >
                                    Register Now For JEE Mock Test and JOSAA
                                    Councelling
                                </NavLink>
                            </div>
                        </div>
                        <div className="row a1">
                            <div className="col-12">
                                <div className="row a1a">
                                    <div className="col-lg-2 offset-lg-10 d-none d-lg-block socictop">
                                        <div className="row">
                                            <a
                                                className="btn"
                                                href="https://www.facebook.com/tensorsofficial"
                                            >
                                                <i className="fa fa-facebook" />
                                            </a>
                                        </div>
                                        <div className="row">
                                            <a
                                                className="btn"
                                                href="https://www.linkedin.com/company/53201198"
                                            >
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </div>
                                        <div className="row">
                                            <a
                                                className="btn"
                                                href="https://www.instagram.com/tensors_official/"
                                            >
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </div>
                                        <div className="row">
                                            <a
                                                className="btn"
                                                href="mailto:tensorsofficial@gmail.com"
                                            >
                                                <i className="fa fa-envelope" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row a1b">
                                    <div className="col col-10 offset-1 col-lg-8 offset-lg-3">
                                        <h2 align="justify">
                                            <span className="green">
                                                The Flagship Tensors Exam{" "}
                                            </span>
                                            for those willing to grind it out
                                            with the best in India
                                        </h2>
                                        <p align="justify">
                                            Experience the essence of the JEE
                                            Main exam through our mock test,
                                            orchestrated by IIT Madras students.
                                            Don't miss this opportunity!{" "}
                                        </p>
                                        <h6 className="descund pb-2">
                                            TENSORS EXAM
                                        </h6>
                                        <NavLink
                                            className="btn-secondary"
                                            to="/jee"
                                        >
                                            Know More..
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Parallax
                            className="custom-class"
                            y={[-30, 0]}
                            tagOuter="figure"
                        >
                            <div className="row">
                                <div className="col-6 offset-3 d-none d-lg-block a2i">
                                    <img
                                        src={a1}
                                        alt="featureImage"
                                        className="img-fluid "
                                    />
                                </div>
                            </div>
                        </Parallax>
                        <Parallax
                            className="custom-class"
                            y={[30, 0]}
                            tagOuter="figure"
                        >
                            <div className="row a3">
                                <div className="col col-10 offset-1 col-lg-8 offset-lg-3">
                                    <h2>
                                        For the students who want to crack{" "}
                                        <span className="green">JEE</span>, we
                                        offer our
                                        <span className="green">
                                            {" "}
                                            MENTORSHIP PROGRAMME
                                        </span>
                                    </h2>
                                    <p align="justify">
                                        The Tensors mentor ship programme is a
                                        year long system which is aimed at
                                        helping the JEE aspirants in +1 and +2.
                                        Everyone who registers will receive the
                                        complete Tensors test series as well.
                                    </p>
                                    <h6 className="descund pb-2">
                                        MENTORSHIP PROGRAMME
                                    </h6>
                                </div>
                            </div>
                        </Parallax>
                        <Parallax
                            className="custom-class"
                            y={[-30, 0]}
                            tagOuter="figure"
                        >
                            <div className="row">
                                <div className="col-6 offset-3 d-none d-lg-block a4i">
                                    <img
                                        src={a4}
                                        alt="featureImage"
                                        className="img-fluid "
                                    />
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Homefeatures;
