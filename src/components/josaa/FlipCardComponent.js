import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Img from '../../assets/images/homebg.jpg';
import './card.css';

import React, { Component } from 'react';

class Card extends React.Component {
    render() {
        return(
            <Flippy
            flipOnHover={true}
            flipOnClick={false} 
            flipDirection="vertical"
            style={{ width: '100%', height: '100%' }}
            >
                <FrontSide className="p-0"
                    style={{
                    backgroundColor: 'transparent',
                    }}
                >
                    <div className="card text-center">
                        <div className="overflow">
                            <img src={Img}   alt="image" className="card-img-top" />
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">Package : {this.props.id}</h4>
                        </div>
                    </div>
                </FrontSide>
                <BackSide  className="p-0 bg-primary"
                    style={{ backgroundColor: 'transparent'}}>
                    <h1 className="m-2">Package : {this.props.id}</h1>
                    <p className="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </BackSide>
            </Flippy>
        );
    }
  }
  
  export default Card;