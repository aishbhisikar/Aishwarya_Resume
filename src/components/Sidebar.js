import React, { useState } from "react";
import "./sidebar.css";
import { SocialIcon } from "react-social-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import aishu from "../images/aishu.jpg";
import { HashLink } from "react-router-hash-link";
let style = {
  left: '0%'
}
function Sidebar() {
  const [sidebar, setSidebar] = useState(false)
  const showHideSideBar = () => {
    setSidebar(!sidebar)
    if(sidebar && window.innerWidth <= 845) {
      style = {
        left: '75%'
      }
      console.log(style)
    } else {
      style = {
        left: '0%'
      }
    }
  }
  
  return (
    <>
      <div className="responsive-nav">
        <FaIcons.FaBars id="menu-toggle" onClick={() => showHideSideBar()} />
        <div id="menu" className="menu" style={style}>
          <AiIcons.AiOutlineClose id="menu-close" onClick={() => showHideSideBar()} />
          <div className="container">
            <div className="image">
              <img src={aishu} alt="Aishwarya" />
            </div>
            <div className="author-content">
              <h4>Aishwarya Bhisikar</h4>
              <span>Graduate Engineer</span>
            </div>
            <nav className="main-nav" role="navigation">
              <ul className="main-menu">
                <li>
                  <HashLink to="#section1" onClick={() => showHideSideBar()}>About me</HashLink>
                </li>

                <li>
                  <HashLink to="#section2" onClick={() => showHideSideBar()}>My Skills</HashLink>
                </li>
                <li>
                  <HashLink to="#section3" onClick={() => showHideSideBar()}>Education</HashLink>
                </li>
                <li>
                  <a href="#section4" onClick={() => showHideSideBar()}>My Work</a>
                </li>
                <li>
                  <HashLink to="#section5" onClick={() => showHideSideBar()}>Contact Me</HashLink>
                </li>
                <li>
                  <a
                    className="button"
                    href="/Aishwarya_Resume/Assets/Aishwarya_Bhisikar.pdf"
                    download="Aishwarya_Bhisikar.pdf"
                  >
                    Download My Resume
                  </a>
                </li>

                
              </ul>
            </nav>
            <div className="social-network">
              <ul className="soial-icons">
                <li>
                  <SocialIcon
                    url="https://www.linkedin.com/in/abhisikar/"
                    bgColor="white"
                  />
                </li>
                <li>
                  <SocialIcon
                    url="https://github.com/aishbhisikar"
                    bgColor="white"
                  />
                </li>
                <li>
                  <SocialIcon
                    url="https://www.facebook.com/ashwarya.bhisikar/"
                    bgColor="white"
                  />
                </li>
                <li>
                  <SocialIcon
                    url="https://www.instagram.com/_.aishuuu.__/"
                    bgColor="white"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
