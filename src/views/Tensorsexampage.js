import React,{Component} from 'react';
import Footer from '../components/FooterComponent';
import Top from '../components/NavComponent';
import Temp from '../components/Temp';

class Tensorsexam extends Component{
    render(){
        return(
            <React.Fragment>
           <Top />
           <Temp />
           <div className="Tensorsexam">
           Tensorsexam
           </div>
           <Footer/> 
           </React.Fragment>
        );
    }
}

export default Tensorsexam;