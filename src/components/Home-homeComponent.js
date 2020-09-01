import React,{Component} from 'react';
import {Col, Row, Media} from 'reactstrap';
import Sci_logo3 from "../assets/images/Sci_logo3.png";
import '../css/Home-homeComponent.css';

class Homehome extends Component{
    render(){
        return(
            <React.Fragment>
            <div >
            <Row>
            <Col className="homecontainer">
            <Row>
            <Col md={{size:10 , offset:2}}>
            <div className="middle">
            <Media object src={Sci_logo3} height="250px"/>
            </div>
            </Col>
            </Row>
            </Col>
            </Row>
            </div>
            </React.Fragment>
            );
        }
    }
    
    export default Homehome;