import React from "react";
import "./menus.css";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="NaVbar-profile-pick">
              <img src="logo.jpg.jpg" alt="profile is downloding" />
            </div>
          </Zoom>
   <Fade left>
          < div className="nav-items">
          <div className="nav-itme">
            <div className="navlink">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome />
                Home
              </Link>
            </div>
            <div className="navlink">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout />
                about
              </Link>
            </div>
            <div className="navlink">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcReadingEbook />
                Education Details
              </Link>
            </div>
            <div className="navlink">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBiotech />
                Tech Stack
              </Link>
            </div>
            <div className="navlink">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcVideoProjector />
                Projects
              </Link>
            </div>

            <div className="navlink">
              <Link
                to="work-exp"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcPortraitMode />
                WorkExperince
              </Link>
            </div>
            <div className="navlink">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessContact />
                Contact Us!
              </Link>
            </div>
          </div>
            </div>
            </Fade>
    </>
    
         
      
  ): (

    <>
      <div className="nav-items">
        <div className="nav-itme">
          <div className="navlink">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcHome title="Home" />
            </Link>
          </div>
          <div className="navlink">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcAbout title="About" />
            </Link>
          </div>
          <div className="navlink">
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcReadingEbook title="EducationDetails" />
            </Link>
          </div>

          <div className="navlink">
            <Link
              to="techstack"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcBiotech title="TechStack" />
            </Link>
          </div>

          <div className="navlink">
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcVideoProjector title="Project" />
            </Link>
          </div>
          <div className="navlink">
            <Link
              to="work-exp"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcPortraitMode title="WorkExperince" />
            </Link>
          </div>

          <div className="navlink">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcBusinessContact title="Contact" />
            </Link>
          </div>
        </div>
      </div>
     
    </>
  )
}
     
    </>
  );
};

export default Menus;
