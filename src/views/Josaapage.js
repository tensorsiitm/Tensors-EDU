import React,{Component} from 'react';
import Footer from '../components/FooterComponent';
import JosaaMain from '../components/josaa/MainComponent';
import Top from '../components/NavComponent';

class Josaa extends Component{
    render(){
        return(
            <React.Fragment>
            <Top />
                <JosaaMain />              
            <Footer /> 
           </React.Fragment>
        );
    }
}

export default Josaa;