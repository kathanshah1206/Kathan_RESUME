import React from "react";

export default function Footer() {
  const copyToClipboard = (e) => {
    navigator.clipboard
      .writeText(e.target.textContent)
      .then(() => {
        alert(`Copied to clipboard: ${e.target.textContent}`);
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  };
  return (
    <section
      id="contact"
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(img/overlay-bg.jpg)" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-12">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left text-center">Get in Touch</h5>
                    </div>
                    <div className="more-info d-flex justify-content-center">
                      <ul className="list-ico">
                        <li style={{ display: "flex", alignItems: "center" }}>
                          <span
                            className="ion-ios-location"
                            style={{ marginRight: "10px", cursor: "pointer" }}
                          ></span>
                          GIDC ANKLESHWAR, BHARUCH 393002
                        </li>
                        <li
                          style={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                        >
                          <span
                            className="ion-ios-telephone"
                            style={{
                              marginRight: "10px",

                              // color: "#4E4E4E",
                            }}
                          ></span>
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={copyToClipboard}
                          >
                            {" "}
                            (+91) 7016239865
                          </span>
                        </li>
                        <li style={{ display: "flex", alignItems: "center" }}>
                          <span
                            className="ion-email"
                            style={{ marginRight: "10px" }}
                          ></span>
                          kathanshah12062002@gmail.com
                        </li>
                      </ul>
                    </div>

                    <div className="socials">
                      <ul>
                        <li style={{ cursor: "pointer" }}>
                          <a>
                            <span className="ico-circle">
                              <i className="ion-social-facebook"></i>
                            </span>
                          </a>
                        </li>
                        <li style={{ cursor: "pointer" }}>
                          <a>
                            <span className="ico-circle">
                              <i className="ion-social-instagram"></i>
                            </span>
                          </a>
                        </li>
                        <li style={{ cursor: "pointer" }}>
                          <a>
                            <span className="ico-circle">
                              <i className="ion-social-twitter"></i>
                            </span>
                          </a>
                        </li>
                        <li style={{ cursor: "pointer" }}>
                          <a>
                            <span className="ico-circle">
                              <i className="ion-social-pinterest"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
