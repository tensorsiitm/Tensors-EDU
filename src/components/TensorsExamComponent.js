import React, { Component } from "react";
import "../css/TensorsExam.css";
import launch from "../assets/images/launch.svg";

class TensorsExam extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="tensexam">
          <div className="row d-flex align-items-stretch">
            <div className="col-12 col-lg-6 defside">
              <div className="row middle1">
                <div className="col-8 offset-2">
                  <h1>Tensors Exam</h1>
                  <p align="justify">
                    The annual Tensors mock JEE examination is the most awaited
                    end-of-the-year JEE examination in all major coaching
                    institutes in South India. The questions papers are designed
                    and conducted by IITians who have demonstrated their skill
                    in cracking the JEE. There are two three-hour-long
                    examinations for the JEE Mains and Advanced respectively.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 regside">
              <div className="row middle2">
                <div className="col-8 offset-2">
                  <h1 className="text-center">Register Here</h1>
                  <form
                    name="gform"
                    id="gform"
                    enctype="text/plain"
                    action="https://docs.google.com/forms/d/e/1FAIpQLSckCpmNnbBxaBqOgGyEAItjguRSda9dGBGQJCV-qgmkIDBAsw/formResponse?"
                    target="hidden_iframe"
                    onsubmit="submitted=true;"
                  >
                    <div className="form-row">
                      <div className="col">
                        <label
                          data-error="wrong"
                          data-success="right"
                          for="Form-pass1"
                        >
                          {" "}
                          First Name<span className="reqd">*</span>
                        </label>
                        <input
                          type="text"
                          id="entry.989038492"
                          name="entry.989038492"
                          required
                          className="form-control validate"
                        />
                      </div>
                      <div className="col">
                        <label
                          data-error="wrong"
                          data-success="right"
                          for="Form-pass1"
                        >
                          {" "}
                          Last Name<span className="reqd">*</span>
                        </label>
                        <input
                          type="text"
                          id="entry.989038492"
                          name="entry.989038492"
                          required
                          className="form-control validate"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <label
                          data-error="wrong"
                          data-success="right"
                          for="Form-pass1"
                        >
                          {" "}
                          School<span className="reqd">*</span>
                        </label>
                        <input
                          type="text"
                          id="entry.989038492"
                          name="entry.989038492"
                          required
                          className="form-control validate"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <label
                          data-error="wrong"
                          data-success="right"
                          for="Form-pass1"
                        >
                          {" "}
                          Coaching Institute<span className="reqd">*</span>
                        </label>
                        <input
                          type="text"
                          id="entry.989038492"
                          name="entry.989038492"
                          required
                          className="form-control validate"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <label
                          data-error="wrong"
                          data-success="right"
                          for="Form-pass1"
                        >
                          {" "}
                          Mobile Number<span className="reqd">*</span>
                        </label>
                        <input
                          type="tel"
                          id="entry.1623478260"
                          name="entry.1623478260"
                          required
                          className="form-control validate"
                        />
                      </div>
                      <div className="col">
                        <label
                          data-error="wrong"
                          data-success="right"
                          for="Form-pass1"
                        >
                          {" "}
                          Alt. Mob. Number
                        </label>
                        <input
                          type="tel"
                          id="entry.1623478260"
                          name="entry.1623478260"
                          className="form-control validate"
                        />
                      </div>
                    </div>
                    <div className="form-row ">
                      <div className="col">
                        <label
                          data-error="wrong"
                          data-success="right"
                          for="Form-email1"
                        >
                          {" "}
                          Email<span className="reqd">*</span>
                        </label>
                        <input
                          type="email"
                          id="entry.1950192440"
                          name="entry.1950192440"
                          required
                          className="form-control validate"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <label
                          data-error="wrong"
                          data-success="right"
                          for="Form-pass1"
                        >
                          {" "}
                          Address
                        </label>
                        <textarea
                          type="text"
                          id="entry.1210502692"
                          name="entry.1210502692"
                          className="form-control validate md-textarea"
                          rows="4"
                        />
                      </div>
                    </div>
                    <div className="text-center mb-3">
                      <button
                        type="submit"
                        className="formsubmit mr-auto ml-auto"
                      >
                        Submit Now
                      </button>
                    </div>
                  </form>
                  <iframe
                    name="hidden_iframe"
                    id="hidden_iframe"
                    onload="if(submitted) {}"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TensorsExam;
