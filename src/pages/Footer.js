import React from "react";
import Marquee from "react-fast-marquee";
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
    <>
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
                          {/* <li style={{ cursor: "pointer" }}>
                          <a>
                            <span className="ico-circle">
                              <i className="ion-social-facebook"></i>
                            </span>
                          </a>
                        </li> */}
                          <li style={{ cursor: "pointer" }}>
                            <a
                              href="https://www.instagram.com/kathan_.shah?igsh=MTNjdjBkampyMmNiOQ=="
                              target="_blank"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-instagram"></i>
                              </span>
                            </a>
                          </li>
                          <li style={{ cursor: "pointer" }}>
                            <a
                              href="https://github.com/kathanshah1206"
                              target="_blank"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>
                          <li style={{ cursor: "pointer" }}>
                            <a
                              href="https://www.linkedin.com/in/kathan-shah-bb26041b2/"
                              target="_blank"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                          <li style={{ cursor: "pointer" }}>
                            <a
                              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXxGGPjkLdDXDFPtmKzZctZJZHbGgjfZctwvKMCjpjVrdClsVpvqdCNZkSQQPgXwrnVZL"
                              target="_blank"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-google-outline"></i>
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
      <Marquee>
        <img
          className=""
          style={{ height: "65px", marginRight: "2rem" }}
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        ></img>
        <img
          style={{ height: "80px", marginRight: "0.4rem" }}
          src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
        ></img>
        <img
          style={{ height: "60px", marginRight: "1rem" }}
          src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png"
        ></img>
        <img
          style={{ height: "50px", marginRight: "2rem" }}
          src="https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png"
        ></img>
        <img
          className=""
          style={{ height: "50px" }}
          src="https://i0.wp.com/iotbyhvm.ooo/wp-content/uploads/2019/01/expressjs.png?fit=872%2C472&ssl=1"
        ></img>
        <img
          style={{ height: "60px", paddingLeft: "7px" }}
          src="https://e7.pngegg.com/pngimages/185/866/png-clipart-html-logo-html-web-design-scalable-graphics-world-wide-web-markup-language-html5-icon-hd-miscellaneous-angle.png"
        ></img>
        <img
          style={{ height: "60px" }}
          src="https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png"
        ></img>
        <img
          style={{ height: "40px", marginLeft: "1.5rem" }}
          src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png"
        ></img>
        <img
          style={{ height: "60px", marginLeft: "1.8rem" }}
          src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png"
        ></img>
        <img
          style={{ height: "60px", marginLeft: "2rem" }}
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/sql-server-icon.png"
        ></img>
        <img
          style={{ height: "60px", marginLeft: "2.2rem" }}
          src="https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon-thumbnail.png"
        ></img>
        <img
          style={{ height: "60px", marginLeft: "2.2rem" }}
          src=" https://redux-saga.js.org//img/Redux-Saga-Logo-Portrait.png"
        ></img>
        <img
          style={{ height: "60px", marginLeft: "2.1rem" }}
          src="https://w7.pngwing.com/pngs/720/46/png-transparent-jquery-plain-wordmark-logo-icon-thumbnail.png"
        ></img>
        <img
          style={{ height: "60px", marginLeft: "1.2rem" }}
          src="https://e7.pngegg.com/pngimages/405/298/png-clipart-java-logo-landscape-tech-companies.png"
        ></img>
        <img
          style={{ height: "80px", marginLeft: "1.2rem" }}
          src="https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies.png"
        ></img>
      </Marquee>
    </>
  );
}
