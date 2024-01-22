import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-6 about-img">
              <img src="logo.jpg.jpg" alt="downloading image" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-6 about-content">
              <h1>About me</h1>
              <p>
                I am a computer Application graduate from integral university
                Lucknow ,currently pursuing Master Computer Application from
                Maharishi University Lucknow,I have Ex-Intern core java with
                Analyze Infotech Lucknow On a few Projects (publised by netlify)
                Technology Excites me and i am always in awe of the change it
                drives in the word .cretain skills i have work including Web
                Development Mern Technology and Data Modeling (NodeJs , ReactJs
                , MongoDB , MongoAtlas expressJs ) and what are might lack in
                skills I make Up for With My Determination to learn .
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
