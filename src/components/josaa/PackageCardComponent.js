import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Img from '../../assets/images/homebg.jpg';
import './card.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const Card=(props)=>{
    return(
        <div>
        <div  className="d-none d-sm-block">
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
                            <button className="card-btn mt-4">Learn More <i class="fa fa-angle-double-right fa-1x"></i></button>
                        </div>
                    </div>
                </FrontSide>
                <BackSide  className="card-back">
                    <h1 className="m-2">Package : {props.id}</h1>
                    <h2 className="m-2">{props.name}</h2>
                    <p className="m-2 p-5" style={{fontSize:"larger"}}>{props.content}</p>
                </BackSide>
            </Flippy>               
        </div>
        <div  className="d-block d-sm-none">
            <Flippy
            flipOnHover={false}
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
                            <p className="m-2 p-3" style={{textAlign:"justify",fontSize:"medium"}}>{props.content}</p>
                        </div>
                    </div>
                </FrontSide>
            </Flippy>               
        </div>
        
        </div>
 
    );
}


  const Packages=()=>{
      return(
          <div className=" packageCard-fragment">
            <div>
                <center>
                    <h1 className="p-3 heading" style={{backgroundColor:'#0F6C7A'}}>WHICH ?</h1>
                </center>
            </div>
            <div className="container"> 
                <div className="row mt-4 mb-4">
                    <div className="col-12 col-sm-5 mb-2 pb-1">
                        <div  data-aos="zoom-in-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                                <Card id='1' name="Kerala Eng"
                                content="Kerala Engineering
                                Includes information regarding all the major Engineering colleges in Kerala."/>   
                        </div>
                    </div>
                    <div className="col-12 col-sm-5 offset-2 pb-1">
                        <div  data-aos="zoom-in-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <Card id='2' name="IIT and NIT"
                            content="A deep-dive into the JOSAA seat allotment process along with discussions about the top institutes and branches in India."/>                   
                        </div>
                    </div>
                </div>
            </div>      
          </div>
        
      );
  }
  
  export default Packages;