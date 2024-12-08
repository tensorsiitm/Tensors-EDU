import React from 'react';
import '../../src/css/JEE.css';
import poster from '../../src/assets/images/jeemain.png';
import Footer from "../components/FooterComponent";
import Top from "../components/NavComponent";

const JEE = () => {
  return (
    <>
      <Top />
      <div className="jeemain-container">
        <div className="left">
          <h1>Tensors JEE Mock Test: Your Pathway to IIT Excellence</h1>
          <p align="justify">
            The Tensors JEE Mock Test, conducted by IIT Madras students, is designed to provide a realistic exam experience for aspiring engineers. This national-level test helps students enhance their preparation by understanding the JEE pattern and improving problem-solving skills.
          </p>
          <p align="justify">
            Participants will benefit from detailed performance feedback, which will help identify strengths and areas to improve. This test is an excellent opportunity to boost confidence and fine-tune strategies for JEE success.
          </p>
          <ul>
            <li>Exam Date: 29th December</li>
            <li>Mode: Online</li>
            <li>Fee: ₹199</li>
          </ul>
          <p align="justify">
            Affordable and accessible, the Tensors JEE Mock Test is the perfect platform to gear up for one of the most competitive exams in the country. Register now and take a step closer to achieving your IIT dreams!
          </p>
        </div>
        <div className="right">
          <img src={poster} className="poster" alt="JEE Mock Test Poster" />
          <div className="button-wrapper">
            <button
              className="launchsubscribe"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://rzp.io/rzp/xL55xWgF", "_blank", "noreferrer");
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
