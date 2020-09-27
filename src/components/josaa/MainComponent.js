import React, { Component } from 'react';
import TimelinePage from './TimelineComponent';
import Features from './FeaturesComponent';
import CarouselPage from './CarouselComponent';
import CardExample from './ConsultantsComponent';
import Card from './FlipCardComponent';
import {Jumbotron} from 'reactstrap';
import './josaa.css';
import Img from '../../assets/images/homebg.jpg';
import {consultants} from '../../assets/data/consultants';


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
                <div className="main container-fluid ">
                    <Jumbotron className="mt-3 jumbotron" >
                        <div className="container-fluid">
                            <div className="row row-header">
                                <div className="col-12 col-sm-6 mr-auto info">
                                    <h1>JOSAA COUNCELING</h1>
                                    <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>
                    </Jumbotron>
                    <CarouselPage info={this.state.consultantinfo} Img={Img}/>
                    <Features/>
                    <TimelinePage />
                    <div className="row mt-2 mb-2">
                        <div className="col-12 col-sm-3 offset-1 m-auto pb-1">
                            <Card id='1'/>                   
                        </div>
                        <div className="col-12 col-sm-3 offset-1 m-auto pb-1">
                            <Card id='2'/>                   
                        </div>
                        <div className="col-12 col-sm-3 offset-1 m-auto">
                            <Card id='3'/>                   
                        </div>
                    </div>

                </div> 

            </React.Fragment>
        )
    }
}

export default JosaaMain;