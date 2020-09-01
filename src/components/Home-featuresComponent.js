<<<<<<< HEAD
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
=======
import React from 'react';
import Particles from 'react-particles-js';
import '../css/Home-featuresComponent.css';
 
function Feature(props){
        return (
<Particles className="particle"
    params={{
		"particles": {
			"number": {
			  "value": 100,
			  "density": {
				"enable": true,
				"value_area": 800
			  }
			},
			"color": {
			  "value": "#00ffc8"
			},
			"shape": {
			  "type": "circle",
			  "stroke": {
				"width": 0,
				"color": "#000000"
			  },
			  "polygon": {
				"nb_sides": 5
			  },
			  "image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			  }
			},
			"opacity": {
			  "value": 0.4,
			  "random": false,
			  "anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			  }
			},
			"size": {
			  "value": 5,
			  "random": true,
			  "anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			  }
			},
			"line_linked": {
			  "enable": true,
			  "distance": 150,
			  "color": "#00ffc8",
			  "opacity": 0.4,
			  "width": 1
			},
			"move": {
			  "enable": true,
			  "speed": 6,
			  "direction": "none",
			  "random": false,
			  "straight": false,
			  "out_mode": "out",
			  "attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			  }
			}
		  },
		  "interactivity": {
			"detect_on": "window",
			"events": {
			  "onhover": {
				"enable": true,
				"mode": "repulse"
			  },
			  "onclick": {
				"enable": true,
				"mode": "push"
			  },
			  "resize": true
			},
			"modes": {
			  "grab": {
				"distance": 400,
				"line_linked": {
				  "opacity": 1
				}
			  },
			  "bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			  },
			  "repulse": {
				"distance": 200
			  },
			  "push": {
				"particles_nb": 4
			  },
			  "remove": {
				"particles_nb": 2
			  }
			}
		  },
		  "retina_detect": true,
		  "config_demo": {
			"hide_card": false,
			"background_color": "#b61924",
			"background_image": "",
			"background_position": "50% 50%",
			"background_repeat": "no-repeat",
			"background_size": "cover"
		  }
	}} />
        );
}

export default Feature;
>>>>>>> f8274590aae7550da1b82ad2b9769cbba5fe80f1
