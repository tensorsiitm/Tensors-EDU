import React from 'react';
import './josaa.css';
import {Jumbotron} from 'reactstrap';
import { Parallax } from 'react-scroll-parallax';

const Home=()=>{
    return(
        <div className="container-fluid mt-3 mb-3 home">
            <div className="row">
                <Jumbotron className="mt-3 jumbotron" >
                    <div className="container-fluid">
                        <div className="row row-header pt-3">
                            <div className="col-12 col-sm-6 mr-auto info">
                            <Parallax className="custom-class" y={[80,-50]} tagOuter="figure">
                                <h1 style={{position:'relative'}}>JOSAA COUNCELING</h1>
                                <p className="d-none d-sm-block" style={{position:'relative'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </Parallax>

                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
            <Parallax className="custom-class" y={[10,-50]} tagOuter="figure">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-6 col-12">
                        <p className="d-md-last d-block d-md-none p-0" style={{position:'relative',color:'#F68554'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p style={{position:'relative',fontSize:'x-large'}}>
                            <span className="d-none d-md-block">
                                We the Tensors team have set up a comprehensive councelling strategy to the IIT aspirants. To register click on the
                                REGISTRATION button.
                            </span>
                        </p>
                    </div>
                    <div className="col-md-5 offset-md-1 col-12 mt-auto mb-auto p-1">
                        <center>
                            <button className="home-register-btn btn-block">
                                REGISTRATION
                            </button>   
                        </center>
                    </div>
                    <div className="col-md-6 col-12">
                        <p style={{position:'relative',fontSize:'x-large'}}>
                            To know more about the strategy scroll down
                        </p>
                    </div>
                </div>    
            </div>
            </Parallax>


            
        </div>
    );
}

export default Home;