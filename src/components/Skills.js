import React from "react";
import { ProgressBar } from "react-bootstrap";

function Skills() {
  return (
    <>
      <style type="text/css">
        {`
    .service-item {
      margin-top: 30px;
    }
    .progress-bar {
      background-color: #4d0642f0;
      color: white;
    }
  
    `}
      </style>
      <section className="section my-services" id="section2">
        <div className="container">
          <div className="section-heading">
            <h2>My Skills</h2>
            <div className="line-dec"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="service-item">
                <h5>HTML5 &amp; CSS3 </h5>
                <ProgressBar now={85} label={`${85}%`} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <h5>Bootstrap</h5>
                <ProgressBar now={70} label={`${70}%`} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <h5>React</h5>
                <ProgressBar now={65} label={`${65}%`} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <h5>Javascript & jQuery</h5>
                <ProgressBar now={45} label={`${45}%`} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <h5>Python(Flask & Django)</h5>
                <ProgressBar now={50} label={`${50}%`} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <h5>MySQL</h5>
                <ProgressBar now={80} label={`${80}%`} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <h5>Photoshop</h5>
                <ProgressBar now={50} label={`${50}%`} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
