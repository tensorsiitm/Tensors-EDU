import React from 'react';
import './josaa.css';
import { Parallax } from 'react-scroll-parallax';
const Home=()=>{
    return(
        <div className="container-fluid mt-3 mb-3 home-register ">
            <div className="row">
                <div className="col-md-6 col-12">
                    <Parallax className="custom-class d-block d-md-none" z={[30, -20]} tagOuter="figure1">
                        <h1 style={{position:'relative'}}>Who Are We?</h1>
                        <p style={{position:'relative'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                 
                        </p>    
                    </Parallax>
                    <div className="d-none d-md-block">
                        <h1 style={{position:'relative'}}>Who Are We?</h1>
                        <p style={{position:'relative'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                 
                        </p>
                    </div>
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
    );
}

export default Home;