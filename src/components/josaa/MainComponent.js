import React, { Component } from 'react';
import TimelinePage from './TimelineComponent';
import Features from './FeaturesComponent';
import CarouselPage from './ConsultantCarouselComponent';
import Packages from './PackageCardComponent';
import Home from './HomeComponent';

import './josaa.css';
import Img from '../../assets/images/homebg.jpg';
import {consultants} from '../../assets/data/consultants';
import { ParallaxProvider } from 'react-scroll-parallax';


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