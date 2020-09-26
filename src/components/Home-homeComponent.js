import React,{Component} from 'react';
import tlogo from "../assets/images/logof.png";
import st from "../assets/images/stripes.svg";
import '../css/Home-homeComponent.css';

class Homehome extends Component{
    render(){
        return(
            <React.Fragment>
            <div className="row homecontainer">
            <div className="col-12 col-md-6">
            <div className="row r1"></div>
            <div className="row r2">
            <div className="col-10 offset-2">
            <h5>Welcome to Tensors Edu</h5>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</h1>
            <button className="box">EXPLORE</button>
            </div>
            </div>
            <div className="row r3">
            <div className="col-6 offset-2">
            <img src={tlogo} className="img-fluid d-none d-md-block"/>
            </div>
            <div className="col-4">
            <img src={st} className="img-fluid d-none d-md-block"/>
            </div>
            </div>
            </div>
            <div className="col-12 col-md-6 tcloud">
            <div className="row">
            <div className="col-md-2 offset-md-10 socictop">
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