import React from "react";

export default function Education() {
  const experiences = [
    {
      title: "HSC in Science (State Board)",
      years: "2019 - 2020",
      company: "Advait Vidyaniketan, Bharuch",
      result: "92% percentile",
    },
    {
      title: "Btech in Information Technology",
      years: "2020 - 2024",
      company: "Dharmsinh Desai university, Nadiad",
      result: "CGPA 8.00",
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
          <h6 className="mb-0 pt-1">{experience.result}</h6>
        </div>
      ))}
    </div>
  );
}
