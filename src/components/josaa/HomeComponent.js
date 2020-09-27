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
                        <div className="row row-header">
                            <div className="col-12 col-sm-6 mr-auto info">
                                <h1>JOSAA COUNCELING</h1>
                                <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
            <div className="container">
                <div className="row" style={{minHeight:'50vh'}}>
                    <div className="col-md-6 col-12">
                        <h1 style={{position:'relative'}}>Who Are We?</h1>
                        <p style={{position:'relative'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="col-md-6 col-12 mt-auto mb-auto">
                        <center>
                            <button className="home-register-button ml-auto bg-danger">
                                REGISTRATION
                            </button>   
                        </center>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Home;