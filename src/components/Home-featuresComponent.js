import React,{Component} from 'react';
import {Col, Row, Media, Button} from 'reactstrap';
import a1 from "../assets/images/a1.svg";
import a2 from "../assets/images/a2.svg";
import a3 from "../assets/images/a3.svg";
import a4 from "../assets/images/a4.svg";
import a5 from "../assets/images/a5.svg";
import '../css/Home-featuresComponent.css';

class Homefeatures extends Component{
    render(){
        return(
            <React.Fragment>
  
        <Row>
        <Col xs={12} md={8} className="a1">
        <Row className="a1r">
        <Col md={{size:6 , offset:1}}>
        <h2>For the students who wants
        to crack <span className="green" >JEE</span>, we offer our
        <span className="green" > MENTORSHIP PROGRAMME</span></h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button>Know More..</Button>
        </Col>
        </Row>
        </Col>
        <Col xs={12} md={4} className="a2">
        <Media middle className="a2r">
        <Media object src={a1} height="150px"/>
        </Media>
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={4} className="a4">
        <Media middle className="a2r">
        <Media object src={a2} height="300px"/>
        </Media>
        </Col>
        <Col xs={12} md={8} className="a3">
        <Row className="a1r">
        <Col md={{size:6 , offset:5}}>
        <h2>For the students who wants
        to crack <span className="green" >JEE</span>, we offer our
        <span className="green" > MENTORSHIP PROGRAMME</span></h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button>Know More..</Button>
        </Col>
        </Row>
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={8} className="a1">
        <Row className="a1r">
        <Col md={{size:6 , offset:1}}>
        <h2>For the students who wants
        to crack <span className="green" >JEE</span>, we offer our
        <span className="green" > MENTORSHIP PROGRAMME</span></h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button>Know More..</Button>
        </Col>
        </Row>
        </Col>
        <Col xs={12} md={4} className="a2">
        <Media middle className="a2r">
        <Media object src={a3} height="300px"/>
        </Media>
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={4} className="a4">
        <Media middle className="a2r">
        <Media object src={a4} height="300px"/>
        </Media>
        </Col>
        <Col xs={12} md={8} className="a3">
        <Row className="a1r">
        <Col md={{size:6 , offset:5}}>
        <h2>For the students who wants
        to crack <span className="green" >JEE</span>, we offer our
        <span className="green" > MENTORSHIP PROGRAMME</span></h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button>Know More..</Button>
        </Col>
        </Row>
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={8} className="a1">
        <Row className="a1r">
        <Col md={{size:6 , offset:1}}>
        <h2>For the students who wants
        to crack <span className="green" >JEE</span>, we offer our
        <span className="green" > MENTORSHIP PROGRAMME</span></h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button>Know More..</Button>
        </Col>
        </Row>
        </Col>
        <Col xs={12} md={4} className="a2">
        <Media middle className="a2r">
        <Media object src={a5} height="300px"/>
        </Media>
        </Col>
        </Row>
   

           </React.Fragment>
        );
    }
}

export default Homefeatures;