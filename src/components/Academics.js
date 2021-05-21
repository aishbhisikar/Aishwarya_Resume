import React from "react";
import { BiChevronsRight } from "react-icons/bi";

function Academics() {
  return (
    <>
      <style type="text/css">
        {`
        .left-text h5{
          text-align: center;
          text-decoration: underline;
          text-decoration-color: #852d76;
          margin-top:50px

        }
    
  
    `}
      </style>
      <section className="section my-services" id="section3">
        <div className="container">
          <div className="section-heading">
            <h2>Education</h2>
            <div className="line-dec"></div>
          </div>

          <div className="row">
            <div className="left-text">
              <h5>Bachloers of Engineering</h5>
              <div className="listContent">
                <ul>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Year :</strong>{" "}
                    <span>2019</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>CGPA :</strong>{" "}
                    <span>8.24</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>College :</strong>{" "}
                    <span>KDK College of Engineering</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>University :</strong>{" "}
                    <span>Nagpur University</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="left-text">
              <h5>Class 12th(HSC)</h5>
              <div className="listContent">
                <ul>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Year :</strong>{" "}
                    <span>2015</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Percentage:</strong>{" "}
                    <span>67</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>College:</strong>{" "}
                    <span>New English Junior College,Nagpur</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Board:</strong>{" "}
                    <span>Maharashtra State Board</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="left-text">
              <h5>Class 10th(SSC)</h5>
              <div className="listContent">
                <ul>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Year :</strong>{" "}
                    <span>2013</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Percentage :</strong>{" "}
                    <span>86</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>School :</strong>{" "}
                    <span>Adarsh Vidya Mandir,Nagpur </span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Board:</strong>{" "}
                    <span>Maharashtra State Board</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Academics;
