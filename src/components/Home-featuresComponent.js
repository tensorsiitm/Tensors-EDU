import React,{Component} from 'react';
import { Button} from 'reactstrap';
import a1 from "../assets/images/a1.svg";
import a2 from "../assets/images/a2.svg";
import a3 from "../assets/images/a3.svg";
import a4 from "../assets/images/a4.svg";
import tlogo from "../assets/images/logof.png";
import st from "../assets/images/stripes.svg";
import '../css/Home-featuresComponent.css';
import { Parallax } from 'react-scroll-parallax';

class Homefeatures extends Component{
    render(){
        return(
            <React.Fragment>
            
        <div className="particlebg">
        <div className="row" >
        <div className="col-12 col-lg-6 order-lg-first order-last">
        <div className="row r1 d-none d-lg-block"></div>
        <div className="row r2 d-none d-lg-block">
        <div className="col-10 offset-2">
        <h5>Welcome to Tensors Edu</h5>
        <h1 >So you’ve decided to become an <span className="gre" >ENGINEER</span> and a lot of questions must be revolving in your mind<span className="gre" >.</span></h1>
        <button className="box">EXPLORE</button>
        </div>
        </div>
        <div className="row r3 d-none d-lg-block">
        <div className="col-6 offset-2 d-none d-lg-block">
        <img src={tlogo} className="img-fluid "/>
        </div>
        <div className="col-4 d-none d-lg-block">
        <img src={st} className="img-fluid "/>
        </div>
        </div>
        <Parallax className="custom-class"   y={[-30, 0]} tagOuter="figure">
        <div className="row">
        <div className="col-6 offset-3 d-none d-lg-block a1i">
        <img src={a1} className="img-fluid "/>
        </div>
        </div>
        </Parallax>
        <Parallax className="custom-class"   y={[30, 0]} tagOuter="figure">
        <div className="row a2">
        <div className="col col-10 offset-1 col-lg-8 offset-lg-1">
        <h2 align="justify">For the students who wants
        to crack <span className="green" >JEE</span>, we offer our
        <span className="green" > MENTORSHIP PROGRAMME</span></h2>
        <p align="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button>Know More..</Button>
        </div>
        </div>
        </Parallax>
        <Parallax className="custom-class"   y={[-30, 0]} tagOuter="figure">
        <div className="row">
        <div className="col-6 offset-3 d-none d-lg-block a3i">
        <img src={a3} className="img-fluid "/>
        </div>
        </div>
        </Parallax>
        <Parallax className="custom-class"   y={[30, 0]} tagOuter="figure">
        <div className="row a4">
        <div className="col col-10 offset-1 col-lg-8 offset-lg-1">
        <h2 align="justify">For the students who wants
        to crack <span className="green" >JEE</span>, we offer our
        <span className="green" > MENTORSHIP PROGRAMME</span></h2>
        <p align="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
        </div>
        </Parallax>
        </div>
        <div className="col-12 col-lg-6">
        <div className="row r2 d-lg-none d-block">
        <div className="col-10 offset-1">
        <h5>Welcome to Tensors Edu</h5>
        <h1 >So you’ve decided to become an <span className="gre" >ENGINEER</span> and a lot of questions must be revolving in your mind</h1>
        <button className="box">EXPLORE</button>
        </div>
        </div>
        <div className="row a1">
        <div className="col-12">
        <div className="row a1a">
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
        <div className="row a1b">
        <div className="col col-10 offset-1 col-lg-8 offset-lg-3">
        <h2 align="justify">The primary question in your mind is
        <span className="green" > ‘Which branch should I select?’</span></h2>
        <p align="justify">
        For most students, this answer comes from either their parents, their coaching institutes, or online forums.
        Here at Tensors, our consultant team have built the largest inter-collegiate network using which we personally interview students in all elite colleges in India so that we can help you make the right choice going into a career in Engineering. Explore our KYB programme to know more about how to avail the service.       </p>
        <h6 className="descund">KYB</h6>
        <Button>Know More..</Button>
        </div>
        </div>
        </div>
        </div>
        <Parallax className="custom-class"   y={[-30, 0]} tagOuter="figure">
        <div className="row">
        <div className="col-6 offset-3 d-none d-lg-block a2i">
        <img src={a2} className="img-fluid "/>
        </div>
        </div>
        </Parallax>
        <Parallax className="custom-class"   y={[30, 0]} tagOuter="figure">
        <div className="row a3">
        <div className="col col-10 offset-1 col-lg-8 offset-lg-3">
        <h2 align="justify">For the students who wants
        to crack <span className="green" >JEE</span>, we offer our
        <span className="green" > MENTORSHIP PROGRAMME</span></h2>
        <p align="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
        </div>
        </Parallax>
        <Parallax className="custom-class"   y={[-30, 0]} tagOuter="figure">
        <div className="row">
        <div className="col-6 offset-3 d-none d-lg-block a4i">
        <img src={a4} className="img-fluid "/>
        </div>
        </div>
        </Parallax>
        </div>
        </div>
   
        </div>
           </React.Fragment>
        );
    }
}

export default Homefeatures;
