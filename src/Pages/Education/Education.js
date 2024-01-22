import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";

const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
          <hr />
        </h2>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "White", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019-2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">BCA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Integral University Lucknow
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "White", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="22022-2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">MCA</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Maharishi University Lucknow
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
