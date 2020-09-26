import React,{Component} from 'react';
import Footer from '../components/FooterComponent';
import Top from '../components/NavComponent';

class Josaa extends Component{
    render(){
        return(
            <React.Fragment>
           <Top />
           <div className="Josaa">
           Josaa
           </div>
           <Footer /> 
           </React.Fragment>
        );
    }
}

export default Josaa;