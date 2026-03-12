import React from "react";
import Image from "next/image";

type Props = {};

const CompanyAbout = (props: Props) => {
  return (
    <div>
      <div className="rts-about-area rts-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* */}
              <div className="rts-about-left-image-area">
                <div
                  className="thumbnail"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "500px",
                  }}
                >
                  <Image
                    src="/assets/images/green/feed-1.avif"
                    alt="solar energy"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              {/* */}
            </div>
            <div className="col-lg-6">
              {/* */}
              <div className="about-right-content-area-solar-energy">
                <div className="title-area-left">
                  <p className="pre">
                    <span>About</span> Company
                  </p>
                  <h2 className="title skew-up">
                    Go Green with <br />
                    Clean Energy
                  </h2>
                </div>
                {/* */}
                <ul
                  className="nav custom-nav-soalr-about nav-pills"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Why Choose Us?
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Our Mission
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Our Goal
                    </button>
                  </li>
                </ul>

                {/* */}
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    {/* */}
                    <div className="single-about-content-solar">
                      <p className="disc">
                        At Green Power Systems, we deliver reliable and
                        innovative solutions tailored to your needs. By
                        combining modern technology with expert service, we
                        ensure lasting impact and support sustainable growth for
                        our partners and communities.
                      </p>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="left-area-wrapper"
                            style={{
                              position: "relative",
                              width: "100%",
                              height: "300px",
                            }}
                          >
                            <Image
                              src="/assets/images/green/bread-cuamb-banner-2.jpg"
                              alt="about"
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          {/* */}
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>Experienced Team of Experts</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>Very first Customers Service</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>Flexiblity Work Environment</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>Provide Quality Service</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="single-about-content-solar">
                      <p className="disc">
                        Our mission at Green Power Systems is to empower Africa
                        with sustainable energy solutions, create opportunities
                        for communities, and drive innovation that supports
                        economic growth and environmental responsibility.
                      </p>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="left-area-wrapper"
                            style={{
                              position: "relative",
                              width: "100%",
                              height: "300px",
                            }}
                          >
                            <Image
                              src="/assets/images/green/other-1.jpg"
                              alt="about"
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>Experienced Team of Exparts</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>Very first Customers Service</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>Flexiblity Work Environment</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>Provide Quality Service</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="single-about-content-solar">
                      <p className="disc">
                        Our goal at Green Power Systems is to establish
                        ourselves as Africa’s leading provider of sustainable
                        energy solutions by 2032. We strive to create over
                        200,000 business partnerships and 25 million employment
                        opportunities, while driving innovation, supporting
                        community development, and promoting a greener, more
                        prosperous future for generations to come.
                      </p>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div
                            className="left-area-wrapper"
                            style={{
                              position: "relative",
                              width: "100%",
                              height: "300px",
                            }}
                          >
                            <Image
                              src="/assets/images/green/bread-cuamb-banner-1.jpg"
                              alt="about"
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>Experienced Team of Exparts</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>Very first Customers Service</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>Flexiblity Work Environment</p>
                          </div>
                          <div className="single-ckeck-wrapper">
                            <Image
                              src="/assets/images/about/dt.png"
                              alt="dotted"
                              width={20}
                              height={20}
                            />
                            <p>Provide Quality Service</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAbout;
