import React from "react";
import "./about.css";
import { BiChevronsRight } from "react-icons/bi";

function About() {
  return (
    <>
    
      <section className="section about-me" id="section1">
        <div className="container">
          <div className="section-heading">
            <h2>About Me</h2>
            <div className="line-dec"></div>
            <span>Graduate Engineer &amp; Web Designer</span>
          </div>

          <div className="row">
            <div className="right-text">
              <p>
                Hello! I'm Aishwarya Bhisikar an engineering graduate seeking to
                ﬁnd the opportunity to work in a fun and challenging working
                environment that will encourage me to improve and learn new and
                necessary skills as well as be motivated by the company to do my
                best for the sake of helping myself and the company.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="left-text">
              <h4>
                Personal vitae
              </h4>
              <div className="listContent">
                <ul>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Degree :</strong>{" "}
                    <span>Bachloer Of Engineer</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Major :</strong>{" "}
                    <span>Computer Technology</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Email :</strong>{" "}
                    <span>aishbhisikar05@gmail.com</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Phone :</strong>{" "}
                    <span>+91-8600192555</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Birthday :</strong>{" "}
                    <span>09 jan 1998</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Gender :</strong>{" "}
                    <span>Female</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Language Known :</strong>{" "}
                    <span>English, Hindi, Marathi</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Nationality :</strong>{" "}
                    <span>Indian</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Current City :</strong>{" "}
                    <span>London,UK</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>UK contact details:</strong>{" "}
                    <span>+447404499927 , abhisikar59@gmail.com </span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Work Status :</strong>{" "}
                    <span>Eligible to work in UK. No Visa Requirement.</span>
                  </li>
                  <li>
                    {" "}
                    <BiChevronsRight /> <strong>Hobbies :</strong>{" "}
                    <span>Travelling, Cooking, Listening Music</span>
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

export default About;
