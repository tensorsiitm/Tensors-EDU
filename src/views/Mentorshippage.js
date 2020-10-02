import React,{Component} from 'react';
import Footer from '../components/FooterComponent';
import Top from '../components/NavComponent';
import Temp from '../components/Temp';
import '../css/temp.css';

class Mentorship extends Component{
    render(){
        return(
            <React.Fragment>
           <Top />
           <div className="temp">
           <div className="row h-100">
           <div className="col-12 col-lg-6 yelside h-100">
           <div className="row">
           <div className="col-8 offset-2">
           </div>
           </div>
           </div>
           <div className="col-12 col-lg-6 bluside h-100">
           <div className="row">
           <div className="col-8 offset-2">
           <h1>Launching Soon..</h1>
           <h3>Subscribe to our news letter to get instant updates.</h3>
           </div>
           </div>
           </div>
           </div>
           </div>
           <Footer />
           </React.Fragment>
        );
    }
}

export default Mentorship;