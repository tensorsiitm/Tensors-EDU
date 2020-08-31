import React,{Component} from 'react';
import Top from '../components/NavComponent';
import Feature from '../components/Home-featuresComponent';


class Home extends Component{
    render(){
        return(
            <React.Fragment>
           <Top />
           <Feature />
           </React.Fragment>
        );
    }
}

export default Home;