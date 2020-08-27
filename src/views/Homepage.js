import React,{Component} from 'react';
import Top from '../components/NavComponent';

class Home extends Component{
    render(){
        return(
            <React.Fragment>
           <Top />
           <div className="Home">
           Home
           </div> 
           </React.Fragment>
        );
    }
}

export default Home;