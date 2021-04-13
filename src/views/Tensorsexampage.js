import React from 'react';
import Footer from '../components/FooterComponent';
import Top from '../components/NavComponent';
import TensorsExam from '../components/TensorsExamComponent';
import '../css/temp.css';


function Tensorsexam(props){
    return(
        <React.Fragment>
       <Top />
       <TensorsExam />
       <Footer />
       </React.Fragment>
    );

    
}

export default Tensorsexam;