import React from "react";

export default function Work_Exp() {
  const experiences = [
    {
      title: "Software Developer Trainee",
      years: "December 2023 - August 2024 (8 months)",
      company: "Ethics Infotech LLP, Vadodara",
    },
    {
      title: "Jr. Software Developer",
      years: "August 2024 - present",
      company: "Benzatine Infotech, Surat",
    },
  ];

  return (
    <div className="row gy-5 gx-4 px-3 ">
      {experiences.map((experience, index) => (
        <div
          className={`col-sm-12 ${index == 0 ? "mt-2" : "mt-5"}`}
          key={index}
        >
          <h5>{experience.title}</h5>
          <hr
            className="text-primary my-2"
            style={{ borderTop: "2px solid rgb(0 0 0 / 30%)" }}
          />
          <p className="text-primary mb-1">{experience.years}</p>
          <h6 className="mb-0">{experience.company}</h6>
        </div>
      ))}
    </div>
  );
}
