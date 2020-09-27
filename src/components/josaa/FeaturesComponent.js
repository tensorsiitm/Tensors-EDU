import React from 'react';
import { AiFillHourglass } from 'react-icons/ai';
import Img from '../../assets/images/home2-removebg-preview.png';


const Features=()=>{
    return(
        <div className="container-fluid mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-4">
                    <div className="row">
                        <div className="col-12">
                            <AiFillHourglass style={{margin:'2%'}}/>
                            <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                        </div>
                        <div className="col-12">
                            <AiFillHourglass style={{margin:'2%'}}/>
                            <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                        </div>
                        <div className="col-12">
                            <AiFillHourglass style={{margin:'2%'}}/>
                            <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-none d-md-block">
                    <img src={Img} className="img-fluid mt-5" width="100%"/>
                </div>
                <div className="col-12 col-md-4">
                    <div className="row">
                        <div className="col-12">
                            <AiFillHourglass style={{margin:'2%'}}/>
                            <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                        </div>
                        <div className="col-12">
                            <AiFillHourglass style={{margin:'2%'}}/>
                            <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                        </div>
                        <div className="col-12">
                            <AiFillHourglass style={{margin:'2%'}}/>
                            <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;