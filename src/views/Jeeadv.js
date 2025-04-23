import React from 'react';
import '../../src/css/JEE.css';
import poster from '../../src/assets/images/jeeadv.jpg';
import Footer from "../components/FooterComponent";
import Top from "../components/NavComponent";

const JEE = () => {
  return (
    <>
      <Top />
      <div className="jeemain-container py-[5vh]">
        <div className="left">
          <h1>Brace Yourself for the Final Showdown – Tensors JEE Advanced Mock Test</h1>
          <p align="justify">
          You’ve put in the hours, solved the toughest problems, and pushed your limits. Now it’s time to test your mettle—for real. The Tensors JEE Advanced Mock Test isn’t just another practice paper. It’s a full-scale simulation designed to mirror the pressure, pacing, and precision of the actual JEE Advanced.          </p>
          {/* <p align="justify">
            Participants will benefit from detailed performance feedback, which will help identify strengths and areas to improve. This test is an excellent opportunity to boost confidence and fine-tune strategies for JEE success.
          </p> */}
          <ul>
            <li>Exam Date: May 4 </li>
            <li>Duration: 6 hours</li>
            <li>Mode: Online</li>
            <li>Fee: ₹399</li>
          </ul>
          <p align="justify">
          Crafted by the minds at IIT Madras, this test gives you the ultimate reality check. From real-time ranking across India to detailed video solutions that break down every question, it’s the closest you’ll get to the real deal before D-day. Plus, our top performers get free JoSAA counselling and a feature on our platform!          </p>
        </div>
        <div className="right">
          <img src={poster} className="poster" alt="JEE Mock Test Poster" />
          <div className="button-wrapper">
            <button
              className="launchsubscribe"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://rzp.io/rzp/yMAc3sB", "_blank", "noreferrer");
              }}
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JEE;
