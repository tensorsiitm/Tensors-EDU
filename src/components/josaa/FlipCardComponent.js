import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Img from '../../assets/images/homebg.jpg';
import './card.css';

const Card=(props)=>{
    return(
        <Flippy
        flipOnHover={true}
        flipOnClick={false} 
        flipDirection="vertical"
        style={{ width: '100%', height: '100%',overflow:'hidden' }}
        >
            <FrontSide className="p-0"
                style={{
                backgroundColor: 'transparent',
                }}
            >
                <div className="card text-center">
                    <div className="overflow">
                        <img src={Img}   alt="image" className="card-img-top" />
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">Package : {props.id}</h4>
                    </div>
                </div>
            </FrontSide>
            <BackSide  className="p-0 bg-primary"
                style={{ backgroundColor: 'transparent'}}>
                <h1 className="m-2">Package : {props.id}</h1>
                <p className="m-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </BackSide>
        </Flippy>                
    );
}


  const Packages=()=>{
      return(
        <div className="container">
            <h1 className="m-5">
                Our Packages
            </h1>  
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
      );
  }
  
  export default Packages;