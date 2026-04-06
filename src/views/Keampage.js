import React from 'react';
import '../css/Keam.css';
import Footer from '../components/FooterComponent';
import Top from '../components/NavComponent';
import eduportLogo from '../assets/eduport.png';


const Keam = () => {
  return (
    <>
      <Top />
      <div className="keam-page">

        {/* ── HERO ── */}
        <div className="keam-hero">
          <div className="keam-hero-left">
            <span className="keam-upcoming-tag">
              <i className="fa fa-fire keam-tag-icon" /> UPCOMING — April 8, 2026
            </span>
            <div className="powered-by-box">
              <span className="powered-by-text">Powered By</span>
              <img src={eduportLogo} alt="Eduport" className="powered-by-logo" />
            </div>
            <h1>KEAM 2026<br />Mock Test</h1>
            <p>
              Crafted by IIT Madras students, our KEAM Mock Test mirrors the exact
              pattern of the Kerala Engineering Entrance Examination. Get a real exam
              feel, benchmark your rank, and walk into KEAM 2026 with full confidence.
            </p>
            <ul className="keam-highlights">
              <li><i className="fa fa-calendar keam-li-icon" /> Mock Test Date: <strong>April 8, 2026</strong></li>
              <li><i className="fa fa-desktop keam-li-icon" /> Mode: <strong>Online (CBT)</strong></li>
              <li><i className="fa fa-clock-o keam-li-icon" /> Duration: <strong>3 Hours</strong></li>
              <li><i className="fa fa-list-alt keam-li-icon" /> Questions: <strong>150 MCQs</strong></li>
              <li><i className="fa fa-star keam-li-icon" /> Total Marks: <strong>600</strong></li>
              <li><i className="fa fa-check keam-li-icon" /> Correct: <strong>+4</strong> &nbsp;|&nbsp; <i className="fa fa-times keam-li-icon keam-li-icon--wrong" /> Wrong: <strong>-1</strong></li>
            </ul>
            <button
              className="keam-cta-btn"
              onClick={() => window.location.href = '#/register'}
            >
              Register Now <i className="fa fa-arrow-right" />
            </button>
          </div>

          <div className="keam-hero-right">
            <div className="keam-stats-box">
              <div className="keam-stat">
                <span className="kstat-num">150</span>
                <span className="kstat-label">Total Questions</span>
              </div>
              <div className="keam-stat">
                <span className="kstat-num">600</span>
                <span className="kstat-label">Total Marks</span>
              </div>
              <div className="keam-stat">
                <span className="kstat-num">3 hrs</span>
                <span className="kstat-label">Duration</span>
              </div>
              <div className="keam-stat keam-stat-wide">
                <div className="subject-pill math">
                  <i className="fa fa-superscript subj-icon" /> Mathematics — 75 Qs &nbsp;|&nbsp; 300 Marks
                </div>
                <div className="subject-pill physics">
                  <i className="fa fa-bolt subj-icon" /> Physics — 45 Qs &nbsp;|&nbsp; 180 Marks
                </div>
                <div className="subject-pill chem">
                  <i className="fa fa-flask subj-icon" /> Chemistry — 30 Qs &nbsp;|&nbsp; 120 Marks
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── WHY THIS MOCK TEST ── */}
        <div className="keam-why-section">
          <div className="keam-why-inner">
            <h2>Why Take the Tensors KEAM Mock Test?</h2>
            <div className="keam-why-grid">
              <div className="keam-why-card">
                <i className="fa fa-graduation-cap kwhy-icon" />
                <h3>IIT Madras Crafted</h3>
                <p>Questions designed by IIT Madras students — matching KEAM difficulty and style.</p>
              </div>
              <div className="keam-why-card">
                <i className="fa fa-pencil-square-o kwhy-icon" />
                <h3>Real Exam Simulation</h3>
                <p>Exact pattern: 150 MCQs, 3-hour CBT, subject split identical to official KEAM.</p>
              </div>
              <div className="keam-why-card">
                <i className="fa fa-trophy kwhy-icon" />
                <h3>All-India Ranking</h3>
                <p>Know where you stand among KEAM aspirants across Kerala and India.</p>
              </div>
              <div className="keam-why-card">
                <i className="fa fa-play-circle kwhy-icon" />
                <h3>Detailed Solutions</h3>
                <p>Access complete video walkthroughs for every question after the test.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── EXAM PATTERN TABLE ── */}
        <div className="keam-pattern-section">
          <h2>Exam Pattern at a Glance</h2>
          <div className="keam-table-wrap">
            <table className="keam-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Questions</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><i className="fa fa-superscript subj-icon" /> Mathematics</td>
                  <td>75</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td><i className="fa fa-bolt subj-icon" /> Physics</td>
                  <td>45</td>
                  <td>180</td>
                </tr>
                <tr>
                  <td><i className="fa fa-flask subj-icon" /> Chemistry</td>
                  <td>30</td>
                  <td>120</td>
                </tr>
                <tr className="total-tr">
                  <td><strong>Total</strong></td>
                  <td><strong>150</strong></td>
                  <td><strong>600</strong></td>
                </tr>
              </tbody>
            </table>
            <div className="keam-marking-row">
              <div className="km-pill correct">
                <i className="fa fa-check" /> Correct: +4
              </div>
              <div className="km-pill wrong">
                <i className="fa fa-times" /> Wrong: -1
              </div>
              <div className="km-pill skip">
                <i className="fa fa-minus" /> Unattempted: 0
              </div>
            </div>
          </div>
        </div>

        {/* ── PAST TENSORS EXAMS ── */}
        <div className="keam-prev-section">
          <h2>Our Previous Mock Tests</h2>
          <p className="keam-prev-sub">JEE Mains and Advanced are done — KEAM is next. Here's our track record.</p>
          <div className="keam-prev-grid">
            <div className="keam-prev-card">
              <i className="fa fa-file-text-o kprev-icon" />
              <h3>Tensors JEE Main Mock Test</h3>
              <p>
                Online mock test mirroring JEE Main — 90 questions, real exam feel,
                conducted by IIT Madras students. Thousands of students registered nationwide.
              </p>
              <a href="#/jee" className="kprev-link">Know More <i className="fa fa-arrow-right" /></a>
            </div>
            <div className="keam-prev-card keam-prev-card--highlight">
              <i className="fa fa-rocket kprev-icon" />
              <h3>Tensors JEE Advanced Mock Test</h3>
              <p>
                Full 6-hour simulation of JEE Advanced with real-time national ranking,
                video solutions, and free JoSAA counselling for top performers.
              </p>
              <a href="#/jeeadv" className="kprev-link">Know More <i className="fa fa-arrow-right" /></a>
            </div>
          </div>
        </div>

        {/* ── FINAL CTA ── */}
        <div className="keam-final-cta">
          <h2>Ready for KEAM 2026?</h2>
          <p>Register for the mock test on <strong>April 8, 2026</strong> and get ahead of the competition.</p>
          <button
            className="keam-cta-btn"
            onClick={() => window.location.href = '#/register'}
          >
            Register Now <i className="fa fa-arrow-right" />
          </button>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Keam;
