import React from 'react';
import { AiFillHourglass } from 'react-icons/ai';
import Img from '../../assets/images/home2-removebg-preview.png';
import { Parallax } from 'react-scroll-parallax';

import './josaa.css';


const Features=()=>{
    return(
        <div className="feature-fragment">
            <div>
                <center>
                    <h1 className="p-3 d-none d-md-block" style={{backgroundColor:'rgb(65, 6, 101)',width:'50%',borderBottomRightRadius:'100vh',borderBottomLeftRadius:'100vh'}}>WHY ?</h1>
                    <h1 className="p-3 d-block d-md-none" style={{backgroundColor:'rgb(65, 6, 101)',width:'70%',borderBottomRightRadius:'5vh',borderBottomLeftRadius:'5vh'}}>WHY ?</h1>
                </center>
            </div>
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-4">
                    <div className="row">
                        <div className="col-12">
                            <Parallax className="custom-class d-none d-sm-block" x={[-10,-50]} tagOuter="figure">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                            </Parallax>
                            <Parallax className="custom-class d-block d-sm-none" x={[10,-10]} tagOuter="figure">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                            </Parallax>
                        </div>
                        <div className="col-12">
                            <Parallax className="custom-class d-none d-sm-block" x={[0,-40]} tagOuter="figure">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                            </Parallax>
                            <Parallax className="custom-class d-block d-sm-none" x={[-10,10]} tagOuter="figure">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                            </Parallax>                        
                        </div>
                        <div className="col-12">
                            <Parallax className="custom-class d-none d-sm-block" x={[10,-30]} tagOuter="figure">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                            </Parallax>
                            <Parallax className="custom-class d-block d-sm-none" x={[10,-10]} tagOuter="figure">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                            </Parallax>                        
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-none d-md-block">
                    <img src={Img} className="img-fluid mt-5 bg-white" style={{borderRadius:'50%', opacity:'0.5'}} width="100%"/>
                </div>
                <div className="col-12 col-md-4">
                    <div className="row">
                        <div className="col-12">
                            <Parallax className="custom-class d-none d-sm-block" x={[10,50]} tagOuter="figure">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                            </Parallax>
                            <Parallax className="custom-class d-block d-sm-none" x={[-10,10]} tagOuter="figure">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                            </Parallax>
                        </div>
                        <div className="col-12">
                            <Parallax className="custom-class d-none d-sm-block" x={[0,40]} tagOuter="figure">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                            </Parallax>
                            <Parallax className="custom-class d-block d-sm-none" x={[10,-10]} tagOuter="figure">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                            </Parallax>                        
                        </div>
                        <div className="col-12">
                            <Parallax className="custom-class d-none d-sm-block" x={[-10,50]} tagOuter="figure">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                            </Parallax>
                            <Parallax className="custom-class d-block d-sm-none" x={[-10,10]} tagOuter="figure">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</p>
                            </Parallax>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Features;