import React,{useState} from 'react';
import {Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption, } from 'reactstrap';
import '../css/Home-testimonialsComponent.css';
import a from "../assets/images/aghin.jpeg";
import b from "../assets/images/denin.jpeg";
import c from "../assets/images/shafil.jpg";
import d from "../assets/images/anand.jpg";
import {Image,Row,Col,Card} from 'react-bootstrap';

const items = [
    {
      src: a,
      altText: 'Slide 1',
      caption: 'Slide 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      src: b,
      altText: 'Slide 2',
      caption: 'Slide 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
      src: c,
      altText: 'Slide 3',
      caption: 'Slide 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
      src: d,
      altText: 'Slide 3',
      caption: 'Slide 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    }
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
      <div className="row row-content align-items-center">
      <div className="col col-sm order-sm-first col-md">
      <div className="media">
          <Image className="d-flex mr-3 img-thumbnail align-self-center"
                  src={item.src} alt={item.altText} height="300px" width="150px"/>
          <div className="media-body">
              <h2 className="mt-0">{item.caption}</h2>
              <h4>{item.caption}</h4>
              <p className="d-none d-sm-block">{item.text}
                  </p>
          </div>
      </div>            </div>
</div>
      </CarouselItem>
    
    );
  });

  return (
      <div >
    <Row className="headerbg">
    <h1 className="line-1 anim-typewriter">Our Testimonials</h1>
    </Row>
    <Row>
    <Col className="testcontainer">
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
    </Col>
    </Row>
    </div>
  );
}

    
    export default Hometestimonials;