import React,{Component} from 'react';
import Particles from 'react-particles-js';
import Top from '../components/NavComponent';
import Homefeatures from '../components/Home-featuresComponent';
import Homehome from '../components/Home-homeComponent';

class Home extends Component{
    render(){
        return(
            <React.Fragment>
            <Particles
            style={{ position: "fixed" }}
            height="95%"
            width="95%"
            params={{
              particles: {
                color: {
                  value: "#000000"
                },
                line_linked: {
                  color: {
                    value: "#000000"
                  }
                },
                number: {
                  value: 80
                },
                size: {
                  value: 3
                }
              }
            }}
          />  
           <Top />
           <Homehome />
           <Homefeatures />
           <div className="Home">
           Home
           </div> 
           </React.Fragment>
        );
    }
}

export default Home;