import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
          <hr />
        </h2>

        <p className="pb-3 text-center">
          🔜 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          soluta exercitationem est esse ex vel, nemo quos tempore sequi
          provident culpa perferendis officia fugit fuga nisi sapiente laborum
          corrupti dolor omnis beatae ipsa quas voluptatum quidem iste.
        </p>
        {/* card 1 */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <span className="card-notify-badge"> front-end</span>

                <img
                  src="https://images.pexels.com/photos/8939516/pexels-photo-8939516.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="project1"
                />
              </div>
              <div className="card-image-overlay m-auto mt-4">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
                <span className="card-detail-badge">mongoDb</span>
              </div>
              <div className="card-body m-auto text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">
                    Online Food Delivery Service
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://shuklaonlinefooddeliveryservices.netlify.app"
                >
                  View
                </a>
              </div>
            </div>
            {/* card 2 */}
            <div className="col-md-4">
              <div className="card rounded">
                <span className="card-notify-badge"> front-end</span>

                <img
                  src="https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="project2"
                />
              </div>
              <div className="card-image-overlay m-auto mt-4">
                <span className="card-detail-badge">React js</span>
                <span className="card-detail-badge">javaScript</span>
                <span className="card-detail-badge">BootStrap</span>
              </div>
              <div className="card-body m-auto text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">
                    Text-Utils online Text Converter
                  </h5>
                </div>
                <a className="ad-btn" href="https://textutilscom.netlify.app/">
                  View
                </a>
              </div>
            </div>
            {/* card 3 */}
            <div className="col-md-4">
              <div className="card rounded">
                <span className="card-notify-badge"> Full Stack</span>

                <img
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="project1"
                />
              </div>
              <div className="card-image-overlay m-auto mt-4">
                <span className="card-detail-badge">Node js</span>
                <span className="card-detail-badge">React js</span>
                <span className="card-detail-badge">Express js</span>
                <span className="card-detail-badge">mongoDb</span>
              </div>
              <div className="card-body m-auto text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">
                    E-commerce online Shopping Website
                  </h5>
                </div>
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
