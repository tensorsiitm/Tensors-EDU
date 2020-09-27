import React from 'react';
import './josaa.css';

const Home=()=>{
    return(
        <div className="container-fluid mt-3 mb-3 home-register ">
            <div className="row">
                <div className="col-md-6 col-12">
                    <h1>Who Are We?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                 
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
    );
}

export default Home;