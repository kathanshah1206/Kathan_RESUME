import { SiFastapi } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React, { useState } from "react";

export default function Projects() {
  return (
    <section id="work" className="services-mf route">
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Projects</h3>
              <p className="subtitle-a"></p>
              <div className=" line-mf" style={{ width: "224px" }}></div>
            </div>
          </div>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="in College (2022)"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">
              SOCIAL MEDIA platform
            </h3>
            <h6 className="mt-2">
              React Js, Node Js , MongoDB, ExpressJs, Bootstrap, CSS
            </h6>
            <p>
              MERN STACK project with user authentication, API profile
              management, post creation & interaction
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="in College (2023)"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">GROCERY DART</h3>
            <h6 className="mt-2">
              React Js, Node Js , MongoDB, ExpressJs, REDUX, Bootstrap, CSS
            </h6>
            <p>
              eCommerce website with user authentication, google OAuth, PayPal
              payment gateway, RestAPI profile management, Admin side portal.
              Complete solution for small business owners
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="in Ethics Infotech (Group Project)"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaPeopleGroup />}
          >
            <h3 className="vertical-timeline-element-title">
              Travel Booking website{" "}
            </h3>
            <h6 className="mt-2">
              Typescript JS, SQL Server, .NET, Bootstrap, CSS, Docker
            </h6>
            <p>
              Created and designed responsive pages and frontend solutions for
              better UI experience
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="in Ethics Infotech (Group Project)"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaPeopleGroup />}
          >
            <h3 className="vertical-timeline-element-title">
              Employee management portal{" "}
            </h3>
            <h6 className="mt-2">
              TypeScript, Reactjs, MUI, Boostrtap, SQL Server, .NET
            </h6>
            <p>
              Provided solution for design and development of employee
              information and profile management pages , better UI experience &
              dynamic design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="in Ethics Infotech (Group Project)"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaPeopleGroup />}
          >
            <h3 className="vertical-timeline-element-title">
              E-commerce website{" "}
            </h3>
            <h6 className="mt-2">
              ReactJS, NodeJS,MongoDB, SQL Server,Bootstrap, CSS
            </h6>
            <p>An online multipurpose website for hospital</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="in Ethics Infotech (Group Project)"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaPeopleGroup />}
          >
            <h3 className="vertical-timeline-element-title">
              GTPOS - a POS software
            </h3>
            <h6 className="mt-2">ReactJS, NodeJS, PouchDB, MUI, CSS</h6>
            <p>
              A POS software compatible across all Operating Systems and devices
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
