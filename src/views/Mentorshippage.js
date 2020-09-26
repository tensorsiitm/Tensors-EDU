import React,{Component} from 'react';
import Footer from '../components/FooterComponent';
import Top from '../components/NavComponent';
import Temp from '../components/Temp';

class Mentorship extends Component{
    render(){
        return(
            <React.Fragment>
           <Top />
           <Temp />
           <div className="Mentorship">
           <h1>This Page is under construction</h1>
           </div> 
           <Footer />
           </React.Fragment>
        );
    }
}

export default Mentorship;