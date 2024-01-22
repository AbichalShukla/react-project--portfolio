import React from "react";
import { useTeheme } from "../../contaxt/TehemeContext";
import Typewriter from "typewriter-effect";
import resume from "../../assets/docs/resume.pdf";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [teheme, setTeheme] = useTeheme();
  // handle Teheme
  const handleTeheme = () => {
    setTeheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container " id="home">
        <div className="teheme-btn" onClick={handleTeheme}>
          {teheme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👏my name </h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["Full Stack Developer!", "Mern Stack Developer !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>

          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://chat.whatsapp.com/ImvT3Vrkyix8wUhDvAPkcf"
                // href="https://wa.me/qr/32O7RBVQZUVAN1"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                href={resume}
                download="AbichalShukla.pdf"
              >
                my Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
