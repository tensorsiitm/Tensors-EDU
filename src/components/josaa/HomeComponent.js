import React from 'react';
import './josaa.css';

import {Link} from 'react-scroll';
import { Jumbotron } from 'react-bootstrap';

const Home=()=>{
    return(
        <div className="container-fluid mt-3 mb-3 home">
            <div className="row">
                <Jumbotron className="mt-3 jumbotron" >
                    <div className="container-fluid">
                        <div className="row row-header pb-3">
                            <div className="col-12 col-sm-6 mr-auto info">
                                <h1 >JOSAA COUNSELLING</h1>
                                <p className="d-none d-sm-block" style={{fontSize:'larger'}}>
                                    The primary question in your mind is ‘Which branch should I select?’
                                    For most students, this answer comes from either their parents, their coaching institutes, or online forums. The Tensors team is passionate of helping you make the right choice regarding both your dream branch and institute.Explore our counselling programme to know more about how to avail the service.  
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 col-12">
                        <p className="d-md-last d-block d-md-none p-0" style={{fontSize:'15px'}}>
                            The primary question in your mind is ‘Which branch should I select?’
                            For most students, this answer comes from either their parents, their coaching institutes, or online forums. The Tensors team is passionate of helping you make the right choice regarding both your dream branch and institute.Explore our counselling programme to know more about how to avail the service.  
                        </p>
                        <p style={{position:'relative',fontSize:'large',textAlign:"justify"}}>
                            <span className="d-none d-md-block">
                                Here at Tensors, our consultant team have built the largest inter-collegiate network using which we personally interview students in all elite colleges in India so we can help you make the right choice going into a career in Engineering.  
                                <br />To register for the JOSAA Counselling program, click on the ‘REGISTER’ button given below.
                            </span>
                        </p>
                    </div>
                    <div className="col-md-5 offset-md-1 col-12 mt-auto mb-auto p-1">
                        <center>
                            <Link to="packages" smooth={true} offset={-100} duration={1000} className="home-register-btn btn-block">
                                REGISTRATION
                            </Link>   
                        </center>
                    </div>
                    <div className="col-md-6 col-12">
                        <p style={{position:'relative',fontSize:'large'}}>
                            To read more about the program, keep scrolling.                        
                        </p>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Home;