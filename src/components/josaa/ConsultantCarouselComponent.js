import React,{useState} from 'react';
import {Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption, } from 'reactstrap';
import '../../css/Home-testimonialsComponent.css';
import shafil from "../../assets/images/testimonials/shafil.jpg"
import anand from "../../assets/images/testimonials/anand.jpg"
import denin from "../../assets/images/testimonials/denin.jpeg"
import aghin from "../../assets/images/testimonials/aghin.jpeg"
import leon from "../../assets/images/testimonials/leon.jpeg"
import amal_mathew from "../../assets/images/testimonials/amal_mathew.jpeg"
import abhirami from "../../assets/images/testimonials/abhirami.jpeg"
import irfan from "../../assets/images/testimonials/irfan.jpeg"

import {Image,Row,Col,Card} from 'react-bootstrap';

const items = [
    {
      src: shafil,
      altText: 'Shafil Maheen',
      caption: 'IISC Bangalore',
    }, 
    {
      src: anand,
      altText: 'Anand George',
      caption: 'IIT Madras',
    }, 
    {
      src: denin,
      altText: 'Denin Jose',
      caption: 'IIT Madras',
    },
    {
      src: aghin,
      altText: 'Aghin Shah Alin',
      caption: 'IIT Madras',
    },
    {
      src: leon,
      altText: 'Leon Jose',
      caption: 'IIT Madras',
    }, 
    {
      src: amal_mathew,
      altText: 'Amal Mathew',
      caption: 'IIT Bombay',
    },
    {
      src: abhirami,
      altText: 'Abhirami Elizbeth Prathap',
      caption: 'IIT Madras',
    },
    {
      src: irfan,
      altText: 'Mohammed Irfan Thayyil',
      caption: 'IIT Madras',
    },  
    ];

const CarouselPage = (props) =>{



  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  const slides = items.map((item) => {
    return (
 
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        className="caroucard"
      >
      <div className="row row-content align-items-center testimonial">
      <div className="col-12 col-lg-4 col-sm-6">
          <Image className="d-flex  img-thumbnail align-self-center m-auto" src={item.src} alt={item.altText} height="300px" width="150px"/>
          <h2 className="text-center mt-2 ">{item.altText}</h2>
          <h4 className="text-center ">{item.caption}</h4>
      </div>
      <div className="col-12 col-lg-4 col-sm-6 d-none d-sm-block">    
          <Image className="d-flex  img-thumbnail align-self-center m-auto" src={item.src} alt={item.altText} height="300px" width="150px"/>
          <h2 className="text-center mt-2">{item.altText}</h2>
          <h4 className="text-center ">{item.caption}</h4>
      </div>
      <div className="col-12 col-lg-4 d-none d-lg-block">    
      <Image className="d-flex  img-thumbnail align-self-center m-auto" src={item.src} alt={item.altText} height="300px" width="150px"/>
      <h2 className="text-center mt-2">{item.altText}</h2>
      <h4 className="text-center ">{item.caption}</h4>
      </div>              
      </div>
      </CarouselItem>
    
    );
  });

  return (
      <div className="yellowbg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#410665" fill-opacity="1" d="M0,128L40,112C80,96,160,64,240,69.3C320,75,400,117,480,117.3C560,117,640,75,720,80C800,85,880,139,960,165.3C1040,192,1120,192,1200,165.3C1280,139,1360,85,1400,58.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

      <div className="row">
      <div className="col-12">
      <div className="whiteoverlay row">
    <div className="testcontainer col-12">
    <h1 className="line-1">Our Consultants</h1>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
        </div>
        </div>
        </div>
            </div>
  );
}

    
    export default CarouselPage;