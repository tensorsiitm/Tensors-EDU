import React from 'react';
import { AiFillHourglass } from 'react-icons/ai';
import question from '../../assets/images/question.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './josaa.css';

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

const Features=()=>{
    return(
        <div className="feature-fragment">
            <div>
                <center>
                    <h1 className="p-3 heading" style={{backgroundColor:'#0F6C7A'}}>Why should I register?</h1>
                </center>
            </div>
            
            <div className="container-fluid p-3">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4">
                        <div className="row pl-2">
                            <div
                                data-aos="fade-right"
                                data-aos-offset="0"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                            >
                            <div className="col-12">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>
                                    Each of the various institutes offer completely different worlds even in similar branches. So its important to know where you’re joining                                
                                </p>
                            </div>
                            <div className="col-12">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>
                                The JOSAA seat allotment process is jam-packed with dozens of documents and processes, that almost always results in some sort of confusion down the lane and creates unwarranted difficulty in the admission process. We can help you get organized in this respect.                               
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-none d-md-block">
                        <center>
                            <img src={question} className="img-fluid mt-3" style={{borderRadius:'50%', opacity:'1'}} width="80%"/>

                        </center>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="row pr-2">
                            <div
                                data-aos="fade-left"
                                data-aos-offset="0"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                            >
                            <div className="col-12">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>
                                    The branch of engineering you select will be instrumental in deciding your future career and enough attention has to be paid towards this aspect
                                </p>
                            </div>
                            <div className="col-12">
                                <AiFillHourglass className="p-1 feature-icon"  style={{position:'relative'}}/>
                                <p style={{position:'relative'}}>
                                A team to approach regarding any FAQ’s regarding the admission process will be instrumental in ensuring everything ends up smoothly. We’ll be by your side till the moment you set foot on your campus.                               
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
        
    );
}

export default Features;