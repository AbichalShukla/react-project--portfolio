import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import "./mobilenav.css";

// import Fade from "react-reveal/Fade";s
import { Link } from "react-scroll";

import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  // handle menu click
  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <MdOutlineRestaurantMenu
              onClick={handleOpen}
              size={30}
              color="white"
            ></MdOutlineRestaurantMenu>
          ) : (
            <FiMenu onClick={handleOpen} size={30} color="white"></FiMenu>
          )}

          <span className="mobile-nav-title">my portfolio</span>
        </div>
        <div>
          {open && (
            <div className="mobile-nav-menu">
              <div className="nav-items">
                <div className="nav-itme">
                  <div className="navlink">
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
                    >
                      <FcBusinessContact />
                      Contact Us!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
