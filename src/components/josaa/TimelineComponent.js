import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import icon from "../../assets/images/sharelogo.png";
import 'react-vertical-timeline-component/style.min.css';
import './josaa.css';
import { Media } from 'reactstrap';



const TimelinePage = () => {
  return (
    <div className="timeline-fragment">
      <div>
          <center>
              <h1 className="p-3 heading" style={{backgroundColor:'#074b55'}}>WHY ?</h1>
          </center>
      </div>
      <VerticalTimeline className="timeline"> 
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'white', color: '#fff'}}
        icon={<img src={icon} className='img-fluid timeline-icon'/>}
      >
        <h6 className="vertical-timeline-element-subtitle">STEP 1</h6>
        <h3 className="vertical-timeline-element-title">Branch Seminars</h3>
        <p className="d-none d-md-block">
          A comprehensive in-depth discussion of all the major branches offered by the top colleges in India and the benefits that come with each.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'white', color: '#fff'}}
        icon={<img src={icon} className='img-fluid timeline-icon'/>}
      >
        <h6 className="vertical-timeline-element-subtitle">STEP 2</h6>
        <h3 className="vertical-timeline-element-title">One-on-one IITian discussion</h3>
        <p className="d-none d-md-block">
          Each who register can sit down with an IITian who will clear any and every doubt they may have, including the seat allotment process, the branch of interest and any other relevant topics        
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: 'white', color: '#fff'}}
        icon={<img src={icon} className='img-fluid timeline-icon'/>}
      >
        <h6 className="vertical-timeline-element-subtitle">STEP 3</h6>
        <h3 className="vertical-timeline-element-title">Seat Allotment Guidance</h3>
        <p className="d-none d-md-block">
          Our team will be in contact with you throughout the seat allotment process making sure that you have all the essential documents on time, without fail
        </p>
      </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    
  );
};

export default TimelinePage;