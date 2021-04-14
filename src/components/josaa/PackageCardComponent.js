import React from 'react';
import './card.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScriptTag from 'react-script-tag';



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

  const Packages=()=>{

      return(
          <div className=" packageCard-fragment" id="packages">
            <div>
                <center>
                    <h1 className="p-3 heading" style={{backgroundColor:'#0F6C7A'}}>Our Packages</h1>
                </center>
            </div>
            <div className="container"> 
                <div className="row mt-4 mb-4">
                    <div className="col-12 col-sm-4 mb-4 offset-sm-1  packcard">
                            <div className="cardtop">
                            <h2 className="text-center">COUNCELLING</h2>
                            <h3 className="text-center"></h3>
                            </div>
                            <div className="text-right align-right mr-2">
                                <button className="price-button"><i className="fa fa-tag" style={{color:"white"}}></i>&emsp;<span>Rs 400</span></button>
                            </div>
                            <br/>
                            <ul>
                            <li><i className="fa fa-check"/> Webinar on overview about different branches</li><br/>
                            <li><i className="fa fa-check"/> One on one session with an IITian</li><br/>
                            <li><i className="fa fa-check"/> Info on placements, higher studies, etc on each branch of interest (NITs and IITs)</li><br/>
                            <li><i className="fa fa-check"/> Assistance on required documents for JoSAA counselling</li><br/>
                            <li><i className="fa fa-check"/> Webinar on pre-college preparations</li><br/>
                            </ul>
                            <h2 className="text-center" style={{color:'#054f5a'}}>
                                <center><button className="home-register-btn btn">Councelling +<br/> Mains + Advanced</button></center>
                            </h2>                            
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-2 mb-4  packcard">
                            <div className="cardtop">
                            <h2 className="text-center">COUNCELLING +<br/> MOCK TESTS</h2>
                            <h3 className="text-center"></h3>
                            </div>
                            <div className="text-right align-right mr-2">
                                <button className="price-button"><i className="fa fa-tag" style={{color:"white"}}></i>&emsp;<span>Rs 500</span></button>
                            </div>
                            <br/>
                            <ul>
                            <li><i className="fa fa-check"/> Webinar on overview about different branches</li><br/>
                            <li><i className="fa fa-check"/> One on one session with an IITian</li><br/>
                            <li><i className="fa fa-check"/> Info on placements, higher studies, etc on each branch of interest (NITs and IITs)</li><br/>
                            <li><i className="fa fa-check"/> Assistance on required documents for JoSAA counselling</li><br/>
                            <li><i className="fa fa-check"/> Webinar on pre-college preparations</li><br/>
                            <li><i className="fa fa-check"/> Access to tensors annual mock tests.</li><br/>
                            </ul>
                           
                            <h2 className="text-center" style={{color:'#054f5a'}}>
                                <center><button className="home-register-btn btn">Councelling</button></center>   
                            </h2>
                        </div>
                    </div>
                </div>
            </div>      
        
      );
  }
  
  export default Packages;