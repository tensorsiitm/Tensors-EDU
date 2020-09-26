import React,{Component} from 'react';
import './josaa.css';

class CardExample extends Component {
    render(){
        const consultant=this.props.info.map((info)=>{
            return(
                <div className="col-sm-3 col-12 p-2">
                    <div className="container">
                        <div className="m-auto row">
                            <div className="col-10">
                                <img src={info.src} className="rounded-circle info-img " width="100%" />
                            </div>
                            <div className="col-2 mt-auto mb-auto ">
                                <div className="col-12 p-1">
                                    <i className="fa fa-instagram p-2 bg-danger b-2 mt-auto mb-auto mr-auto info-sicon"/>
                                </div>
                                <div className="col-12 p-1">
                                    <i className="fa fa-linkedin p-2 bg-primary mt-auto mb-auto info-sicon"/>
                                </div>
                                <div className="col-12 p-1">
                                    <i className="fa fa-whatsapp p-2 bg-success mt-auto mb-auto info-sicon"/>
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
        })
        return (
            <div className="container-fluid justify-content-center">
                <div className="row justify-content-center">
                    {consultant}
                </div>
            </div>
        )      
    }
}

export default CardExample;