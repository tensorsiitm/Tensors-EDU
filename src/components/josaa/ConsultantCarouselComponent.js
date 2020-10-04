import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import { Media } from 'reactstrap';
import info from './ConsultantsName';
import './josaa.css';



const Consultant=()=>{
    return (
        <div>
            {
                    info.map((info)=>{
                        return(
                            <MDBCarouselItem itemId={info.id}>
                                <MDBView>
                                    <div className="container mb-5">
                                        <div class="row">
                                            <div className="col-sm-5 col-12">
                                                <img className="info-img d-flex rounded-circle avatar z-depth-5-half mb-3 mx-auto mr-3" src={info.img} alt="Generic placeholder image"/>
                                                <center>
                                                    <h3 className="font-weight-bold mr-auto ml-auto d-block d-sm-none" style={{color:"#8ae237"}}>{info.name}</h3>
                                                </center>
                                            </div>
                                            <div className="info-content col-sm-7 d-none d-sm-block justify-content-center container mt-auto mb-auto">
                                                <h2 className="font-weight-bold mb-3">{info.name}</h2>
                                                <h3 className="font-weight-bold ml-5">{info.quote}</h3>    
                                            </div>
                                        </div>
                                    </div>
                                </MDBView>
                            </MDBCarouselItem>
                        );
                    })
                }
        </div>
    )
}

class CarouselPage extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container-fluid">
                <div>
                    <center>
                        <h1 className="p-3" style={{color:'#ADE379'}}>OUR CONSULTANTS</h1>
                    </center>
                </div>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1 carousel con-car"
                >
                    <MDBCarouselInner>
                        <Consultant />
                    </MDBCarouselInner>
                </MDBCarousel>
            </div>

          );
    }
}

export default CarouselPage;