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
              <h1 className="p-3 d-none d-md-block" style={{backgroundColor:'rgb(50, 5, 78)',width:'50%',borderBottomRightRadius:'100vh',borderBottomLeftRadius:'100vh'}}>HOW ?</h1>
              <h1 className="p-3 d-block d-md-none" style={{backgroundColor:'rgb(50, 5, 78)',width:'70%',borderBottomRightRadius:'5vh',borderBottomLeftRadius:'5vh'}}>HOW ?</h1>
          </center>
      </div>
      <VerticalTimeline className="timeline"> 
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        /*contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}*/
        date="Step 1"
        iconStyle={{ background: 'white', color: '#fff'}}
        icon={<img src={icon} className='img-fluid timeline-icon'/>}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p className="d-none d-md-block">
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: 'white', color: '#fff'}}
        icon={<img src={icon} className='img-fluid timeline-icon'/>}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p className="d-none d-md-block">
          Creative Direction, User Experience, Visual Design, SEO, Online Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: 'white', color: '#fff'}}
        icon={<img src={icon} className='img-fluid timeline-icon'/>}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p className="d-none d-md-block">
          User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: 'white', color: '#fff'}}
        icon={<img src={icon} className='img-fluid timeline-icon'/>}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p className="d-none d-md-block">
          User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    
  );
};

export default TimelinePage;