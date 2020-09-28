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
                    <div className="card-body">
                        <h4 className="card-title">Package : {props.id}</h4>
                        <h4 className="card-title">{props.name}</h4>
                        <button className="card-btn">Learn More <i class="fa fa-angle-double-right fa-1x"></i></button>
                    </div>
                </div>
            </FrontSide>
            <BackSide  className="card-back">
                <h1 className="m-2">Package : {props.id}</h1>
                <p className="m-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </BackSide>
        </Flippy>                
    );
}


  const Packages=()=>{
      return(
          <div className=" packageCard-fragment">
            <div>
                <center>
                    <h1 className="p-3 d-none d-md-block" style={{backgroundColor:'rgb(65, 6, 101)',width:'50%',borderBottomRightRadius:'100vh',borderBottomLeftRadius:'100vh'}}>WHICH ?</h1>
                    <h1 className="p-3 d-block d-md-none" style={{backgroundColor:'rgb(65, 6, 101)',width:'70%',borderBottomRightRadius:'5vh',borderBottomLeftRadius:'5vh'}}>WHICH ?</h1>
                </center>
            </div>
            <div className="container"> 
                <div className="row mt-4 mb-4">
                    <div className="col-12 col-sm-5 offset-1 m-auto pb-1">
                        <Card id='1' name="Kerala Eng"/>                   
                    </div>
                    <div className="col-12 col-sm-5 offset-1 m-auto pb-1">
                        <Card id='2' name="IIT and NIT"/>                   
                    </div>
                </div>
            </div>      
          </div>
        
      );
  }
  
  export default Packages;