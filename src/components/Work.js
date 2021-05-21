import React from "react";
import "./work.css";
import WorkData from "./WorkData";

function Work() {
  return (
    <>
      <section className="section my-work" id="section4">
        <div className="container">
          <div className="section-heading">
            <h2>My Work</h2>
            <div className="line-dec"></div>
          </div>
          <div className="row">
            <div className="isotope-wrapper">
              <div className="isotope-box">
              {/* <h6>These are my project which I've created during learning React and Python for my practice </h6> */}
                {WorkData.map((val, index) => {
                  return (
                    <div className="isotope-item" key={val.id}>
                      <figure className="snip1321">
                        <img src={val.photo} alt={val.title}/>
                        <figcaption>
                          <h4>{val.title}</h4>
                          <span>{val.desc} </span>
                          <span ><mark>{val.demo_link}</mark></span>
                        </figcaption>
                      </figure>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
