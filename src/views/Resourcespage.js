import React,{Component} from 'react';
import Top from '../components/NavComponent';

class Resources extends Component{
    render(){
        return(
            <React.Fragment>
           <Top />
           <div className="Resources">
           Resources
           </div> 
           </React.Fragment>
        );
    }
}

export default Resources;