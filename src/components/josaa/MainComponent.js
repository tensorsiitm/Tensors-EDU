import React, { Component } from 'react';
import TimelinePage from './TimelineComponent';
import Features from './FeaturesComponent';
import CarouselPage from './CarouselComponent';
import CardExample from './ConsultantsComponent';
import Packages from './FlipCardComponent';
import Home from './HomeComponent';

import {Jumbotron} from 'reactstrap';
import './josaa.css';
import Img from '../../assets/images/homebg.jpg';
import {consultants} from '../../assets/data/consultants';
import { ParallaxProvider,Parallax } from 'react-scroll-parallax';


class JosaaMain extends Component{
    constructor(props){
        super(props);
        this.state={
            consultantinfo: consultants,
            Img:Img
        }
    }
    render(){
        return(
            <React.Fragment>
                <ParallaxProvider>
                    <div className="main container-fluid ">
                        <Jumbotron className="mt-3 jumbotron " >
                            <div className="container-fluid">
                                <div className="row row-header">
                                    <div className="col-12 col-sm-6 mr-auto info">
                                    <Parallax className="custom-class" y={[100, -50]} tagOuter="figure">
                                        <h1>JOSAA COUNCELING</h1>
                                        <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </Parallax>
                                    </div>
                                </div>
                            </div>
                        </Jumbotron>
                        <Home />
                        <Features/>
                        <TimelinePage />
                        <Packages />
                        <CarouselPage info={this.state.consultantinfo} Img={Img}/>
                    </div>     
                </ParallaxProvider>
                
            </React.Fragment>
        )
    }
}

export default JosaaMain;