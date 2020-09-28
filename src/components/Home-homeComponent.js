import React,{Component} from 'react';
import tlogo from "../assets/images/logof.png";
import st from "../assets/images/stripes.svg";
import '../css/Home-homeComponent.css';

class Homehome extends Component{
    render(){
        return(
            <React.Fragment>
            <div className="row homecontainer">
            <div className="col-12 col-lg-6">
            <div className="row r1"></div>
            <div className="row r2">
            <div className="col-10 offset-2">
            <h5>Welcome to Tensors Edu</h5>
            <h1>Okay. So you’ve decided to become an ENGINEER and you've a lot of questions</h1>
            <button className="box">EXPLORE</button>
            </div>
            </div>
            <div className="row r3">
            <div className="col-6 offset-2 d-none d-lg-block">
            <img src={tlogo} className="img-fluid "/>
            </div>
            <div className="col-4 d-none d-lg-block">
            <img src={st} className="img-fluid "/>
            </div>
            </div>
            </div>
            <div className="col-12 col-lg-6 tcloud">
            <div className="row">
            <div className="col-lg-2 offset-lg-10 d-none d-lg-block socictop">
            <div className="row"><a
            className="btn"
            href="http://www.facebook.com/profile.php?id="
          >
            <i className="fa fa-facebook" />
          </a></div>
            <div className="row"><a
            className="btn"
            href="http://www.facebook.com/profile.php?id="
          >
            <i className="fa fa-linkedin" />
          </a></div>
            <div className="row"><a
            className="btn"
            href="http://www.facebook.com/profile.php?id="
          >
            <i className="fa fa-instagram" />
          </a></div>
            <div className="row"><a
            className="btn"
            href="http://www.facebook.com/profile.php?id="
          >
            <i className="fa fa-envelope" />
          </a>
          </div>
            </div>
            </div>
            </div>
            </div>
            </React.Fragment>
            );
        }
    }
    
    export default Homehome;