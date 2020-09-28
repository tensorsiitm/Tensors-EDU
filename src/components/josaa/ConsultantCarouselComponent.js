import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import './josaa.css';

const Consultant=({start_id=0,end_id=0,info,Img})=>{
    return (
        <div>
            <div className="d-block d-md-none">
                {
                    info.map((info)=>{
                        return(
                            <MDBCarouselItem itemId={info.id}>
                                <MDBView>
                                    <div className="container justify-content-center" >
                                        <div className="row justify-content-center m-1 pb-4">
                                        <div className="col-12">
                                            <div className="container">
                                                <div className="m-auto row">
                                                    <div className="col-10">
                                                        <img src={Img} className="rounded-circle info-img " width="100%" />
                                                    </div>
                                                    <div className="col-2 mt-auto mb-auto ">
                                                        <div className="col-12 p-1">
                                                            <a href={info.instagram}>
                                                                <i className="fa fa-instagram p-2 b-2 mt-auto mb-auto mr-auto info-sicon-instagram"/>
                                                            </a>
                                                        </div>
                                                        <div className="col-12 p-1">
                                                            <a href={info.linkedin}>
                                                            <i className="fa fa-linkedin p-2 mt-auto mb-auto info-sicon-linkedin"/> 
                                                            </a>                                    
                                                        </div>
                                                        <div className="col-12 p-1">
                                                            <a href={info.whatsapp}>
                                                                <i className="fa fa-whatsapp p-2 mt-auto mb-auto info-sicon-whatsapp"/>
                                                            </a>                                    
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row col-10 justify-content-center">
                                                    <h6>{info.name}</h6>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <h7>{info.branch}</h7>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </MDBView>
                        </MDBCarouselItem>
                        );
                    })
                }
            </div>
            <div className="d-none d-sm-block">
                {info.map((info,i) => {
                    if (i >= start_id && i <= end_id) {
                        return (
                            <div className="col-md-4">
                                <div className="container">
                                    <div className="m-auto row">
                                        <div className="col-10">
                                            <img src={Img} className="rounded-circle info-img " width="100%" />
                                        </div>
                                        <div className="col-2 mt-auto mb-auto ">
                                            <div className="col-12 p-1">
                                                <a href={info.instagram}>
                                                    <i className="fa fa-instagram p-2 b-2 mt-auto mb-auto mr-auto info-sicon-instagram"/>
                                                </a>
                                            </div>
                                            <div className="col-12 p-1">
                                                <a href={info.linkedin}>
                                                <i className="fa fa-linkedin p-2 mt-auto mb-auto info-sicon-linkedin"/> 
                                                </a>                                    
                                            </div>
                                            <div className="col-12 p-1">
                                                <a href={info.whatsapp}>
                                                    <i className="fa fa-whatsapp p-2 mt-auto mb-auto info-sicon-whatsapp"/>
                                                </a>                                    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row col-10 justify-content-center">
                                        <h4>{info.name}</h4>
                                    </div>
                                    <div className="row justify-content-center">
                                        <p>{info.branch}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}            
            </div>
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
                        <h1 className="p-3">OUR CONSULTANTS</h1>
                    </center>
                </div>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1 carousel"
                >
                    <MDBCarouselInner>
                        <div className="d-none d-sm-block">
                                <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <div className="container" style={{display:'flex',flexDirection: 'row',flexWrap: 'wrap',alignContent: 'flex-start'}}>
                                        <div className="row">
                                            <div className="col-12">
                                                <Consultant start_id="1" end_id="3" info={this.props.info} Img={this.props.Img}/>
                                            </div>
                                        </div>
                                            
                                    </div>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <div className="container justify-content-center">
                                        <div className="row">
                                            <Consultant start_id="4" end_id="6" info={this.props.info} Img={this.props.Img}/>
                                        </div>
                                    </div>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <div className="container justify-content-center">
                                        <div className="row">
                                            <Consultant start_id="7" end_id="9" info={this.props.info} Img={this.props.Img}/>
                                        </div>
                                    </div>
                                </MDBView>
                            </MDBCarouselItem>
                        </div>
                        <div className="d-block d-sm-none">
                            <Consultant info={this.props.info} Img={this.props.Img}/>
                        </div>
                    </MDBCarouselInner>
                </MDBCarousel>
            </div>

          );
    }
}

export default CarouselPage;