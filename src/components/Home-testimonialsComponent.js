import React,{useState} from 'react';
import {Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption, } from 'reactstrap';
import '../css/Home-testimonialsComponent.css';
import shafil from "../assets/images/testimonials/shafil.jpg"
import anand from "../assets/images/testimonials/anand.jpg"
import denin from "../assets/images/testimonials/denin.jpeg"
import aghin from "../assets/images/testimonials/aghin.jpeg"
import leon from "../assets/images/testimonials/leon.jpeg"
import amal_mathew from "../assets/images/testimonials/amal_mathew.jpeg"
import abhirami from "../assets/images/testimonials/abhirami.jpeg"
import irfan from "../assets/images/testimonials/irfan.jpeg"

import {Image,Row,Col,Card} from 'react-bootstrap';

const items = [
    {
      src: shafil,
      altText: 'Shafil Maheen',
      caption: 'IISC Bangalore',
      text: 'By Tensors, I was able to identify the chinks in my JEE preparation, literally. Tensors is so balanced inspite of being very detailed, that I got the true feel of writing the JEE exams. It developed my confidence and kept the tempo going in the last stages of preparation.'    },
    {
      src: anand,
      altText: 'Anand George',
      caption: 'IIT Madras',
      text: 'There has been a lot of hype built up around IIT JEE, particularly that it is something only extraordinary and brilliant people can qualify, but out of my experience, I can assure you that there is little truth in the statement.'    },
    {
      src: denin,
      altText: 'Denin Jose',
      caption: 'IIT Madras',
      text: 'The Tensors exam played a vital part in my JEE preparation. It enabled me to estimate my potential and therefore helped me know my limits and push them. It gave me an insight as to what topics I was weak in, and to mend my ways to focus more on my weakness.'
    },
    {
      src: aghin,
      altText: 'Aghin Shah Alin',
      caption: 'IIT Madras',
      text: 'I used to be an average student, that was when I got introduced to tensors through my friends. It has been a great experience facing the questions, testing the analytical and practical applications simultaneously.'
    },
    {
      src: leon,
      altText: 'Leon Jose',
      caption: 'IIT Madras',
      text: 'Believe me when I say that Tensors is the best mock exam for JEE aspirants. It gives us a clear cut explanation about how the original exam would be. Through the Tensors exam I wasable to judge what would be my stand amoungst others in the state in jee exams.'    },
    {
      src: amal_mathew,
      altText: 'Amal Mathew',
      caption: 'IIT Bombay',
      text: 'When you take a mock test you expect it to live up to the standards of the original. Tensors, probably because it was made by IITians with an intent to kill, broke that standard. Solving such a paper boosted my confidence due to the simple fact that IIT JEE was going to be easier.'    },
    {
      src: abhirami,
      altText: 'Abhirami Elizbeth Prathap',
      caption: 'IIT Madras',
      text: 'Tensors is undoubtedly the best mock test available for JEE aspirants, hands down! The test helped me to identify the gaps in my preparation and start rectifying them. Tensors pointed out my weak topics while helping me understand the true benefit of efficient time management.'
},
    {
      src: irfan,
      altText: 'Mohammed Irfan Thayyil',
      caption: 'IIT Madras',
      text: 'Tensors is modelled to encourage a more conceptual analysis of each problem. This helped me tremendously as I was finding a shortage of these problems. The test also introduced me to my peers who gave me tips on attempting certain types of questions.'    },
  ];

const Hometestimonials = (props) =>{



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
        key={item.src}
        className="caroucard"
      >
      <div className="row row-content align-items-center testimonial">
      <div className="col-12 col-lg-3  order-sm-first ">
          <Image className="d-flex  img-thumbnail align-self-center" src={item.src} alt={item.altText} height="300px" width="150px"/>
      </div>
      <div className="col-12 col-lg-9">    
          <div className="media-body">
              <h2 className="mt-0">{item.altText}</h2>
              <h4>{item.caption}</h4>
              <p>{item.text}</p>
          </div>
      </div>            
      </div>
      </CarouselItem>
    
    );
  });

  return (
      <div className="yellowbg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill=" #0F6C7A" fill-opacity="1" d="M0,128L40,112C80,96,160,64,240,69.3C320,75,400,117,480,117.3C560,117,640,75,720,80C800,85,880,139,960,165.3C1040,192,1120,192,1200,165.3C1280,139,1360,85,1400,58.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

      <div className="row">
      <div className="col-12">
      <div className="whiteoverlay row">
    <div className="testcontainer col-12">
    <h1 className="line-1">Our Testimonials</h1>
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

    
    export default Hometestimonials;