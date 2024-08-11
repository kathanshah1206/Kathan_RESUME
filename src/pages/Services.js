import React from "react";
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
export default function Services() {
  return (
    <section id="service" className="services-mf route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Services</h3>
              <p className="subtitle-a"></p>
              <div className=" line-mf" style={{ width: "207px" }}></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-monitor"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Web Design</h2>
                <p className="s-description text-center"></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-code-working"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Full Stack Development</h2>
                <p className="s-description text-center"></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className=" ico-circle">
                  <SiFastapi className="pb-3" />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Backend Development</h2>
                <p className="s-description text-center">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni adipisci eaque autem fugiat! Quia, provident vitae!
              Magni tempora perferendis eum non provident. */}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-android-phone-portrait"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Responsive Design</h2>
                <p className="s-description text-center">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni adipisci eaque autem fugiat! Quia, provident vitae!
              Magni tempora perferendis eum non provident. */}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <FaDatabase className="pb-3" />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Database services</h2>
                <p className="s-description text-center">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni adipisci eaque autem fugiat! Quia, provident vitae!
              Magni tempora perferendis eum non provident. */}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <FaHandshake className="pb-3" />
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title pt-2 " style={{ fontSize: "1.21rem" }}>
                  Professional communication
                </h2>
                <p className="s-description text-center">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni adipisci eaque autem fugiat! Quia, provident vitae!
              Magni tempora perferendis eum non provident. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
