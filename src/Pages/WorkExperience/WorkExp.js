import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiReact } from "react-icons/si";

const WorkExp = () => {
  return (
    <>
      <div className=" work " id="work-exp">
        <div className="  container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#138781",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #138781",
              }}
              date="2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">Core Java</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Analyze Infotech Lucknow
              </h4>
              <p>I Have Completed Six Month Tranning Program Core Java</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#138781",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #138781",
              }}
              date="2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">Fresher</h3>
              <h4 className="vertical-timeline-element-subtitle">Fresher</h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
