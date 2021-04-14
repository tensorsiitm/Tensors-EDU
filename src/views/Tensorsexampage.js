import React from 'react';
import Footer from '../components/FooterComponent';
import Top from '../components/NavComponent';
import Countdown from '../components/CounterComponent';
import '../css/temp.css';
import moment from 'moment';



function Tensorsexam(props){
    return(
        <React.Fragment>
       <Top />
       <div className="temp">
       <div className="row h-100">
       <div className="col-12 col-lg-6 yelside h-100">
       <div className="row middle1">
       <div className="col-8 offset-2">
       <h1>Tensors Exam</h1>
       <p align="justify">
       The annual Tensors mock JEE examination is the most awaited pre-JEE examination for all serious JEE aspirants and coaching institutes in India. The question papers are designed as well as conducted by IITians who have demonstrated their skill in cracking the JEE. The mains exam consists of one three hour long paper while the Advanced paper is a comprehensive two - 3 hour long paper.
       </p>
       </div>
       </div>
       </div>
       <div className="col-12 col-lg-6 bluside h-100">
       <div className="row middle2">
       <div className="col-12 ml-3">
       <h1 className="text-center">Registration Opens Soon</h1>
         <br/>
         <br/>
       <span><Countdown timeTillDate="05 13 2021, 11:30 am" timeFormat="MM DD YYYY, hh:mm a"/></span>
       <br/><br/>
       <center><button className="home-register-btn btn" disabled>JEE Mains</button></center>
       <center><button className="home-register-btn btn" disabled>Mains + Advanced</button></center>
       <center><button className="home-register-btn btn" disabled>Councelling</button></center>
       <center><button className="home-register-btn btn" disabled>Councelling + Mains + Advanced</button></center>
       </div>
       </div>
       </div>
       </div>
       </div>
       <Footer />
       </React.Fragment>
    );

    
}

export default Tensorsexam;