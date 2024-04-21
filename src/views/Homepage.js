import React,{Component} from 'react';
import Top from '../components/NavComponent';
import Homefeatures from '../components/Home-featuresComponent';
import Hometestimonials from '../components/Home-testimonialsComponent';
import Footer from '../components/FooterComponent';
import { ParallaxProvider } from 'react-scroll-parallax';
import Particles from '@tsparticles/react';
//import ReactGA from 'react-ga';


// function initializeReactGA() {
//     ReactGA.initialize('UA-179929497-1');
//     ReactGA.pageview('/homepage');
// }

class Home extends Component{
    render(){
        return(
            <React.Fragment>
            <ParallaxProvider>
            <Particles
            style={{position:"fixed"}}
            params={{
              "particles": {
                  "number": {
                      "value": 500,
                      "density": {
                          "enable": true
                      }
                  },
                  "size": {
                      "value": 3,
                      "random": true,
                      "anim": {
                          "speed": 4,
                          "size_min": 0.3
                      }
                  },
                  "line_linked": {
                      "enable": false
                  },
                  "move": {
                      "random": true,
                      "speed": 1,
                      "direction": "top",
                      "out_mode": "out"
                  }
              },
              "interactivity": {
                "detect_on": "window",
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "repulse"
                      },
                      "onclick": {
                          "enable": true,
                          "mode": "bubble"
                      }
                  },
                  "modes": {
                      "bubble": {
                          "distance": 250,
                          "duration": 2,
                          "size": 0,
                          "opacity": 0
                      },
                      "repulse": {
                          "distance": 100,
                          "duration": 4
                      }
                  }
              }
          }} />
            
           <Top />

           <Homefeatures />
           <Hometestimonials />
           <Footer />
           </ParallaxProvider>
           </React.Fragment>
        );
    }
}

export default Home;