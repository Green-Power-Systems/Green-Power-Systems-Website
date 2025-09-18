import React from 'react'

type Props = {}

const CompanyAbout = (props: Props) => {
  return (
    <div>
      <div className="rts-about-area rts-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* <!-- about inner solar energy --> */}
              <div className="rts-about-left-image-area">
                <div className="thumbnail">
                  <img src="assets/images/about/20.png" alt="solar energy" />
                </div>
              </div>
              {/* <!-- about inner solar energy end --> */}
            </div>
            <div className="col-lg-6">
              {/* <!-- about nrighht content area start --> */}
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
                {/* <!-- tab area start about --> */}
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

                {/* <!-- nav content start --> */}
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    {/* <!-- single nav content start --> */}
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
                          <div className="left-area-wrapper">
                            <img src="assets/images/about/21.jpg" alt="about" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          {/* <!-- about ncheck wrapper main --> */}
                          <div className="single-ckeck-wrapper">
                            <img
                              src="assets/images/about/dt.png"
                              alt="dotted"
                            />
                            <p>Experienced Team of Experts</p>
                          </div>
                          {/* <!-- about ncheck wrapper main end -->
                                            <!-- about ncheck wrapper main --> */}
                          <div className="single-ckeck-wrapper">
                            <img
                              src="assets/images/about/dt.png"
                              alt="dotted"
                            />
                            <p>Very first Customers Service</p>
                          </div>
                          {/* <!-- about ncheck wrapper main end -->
                                            <!-- about ncheck wrapper main --> */}
                          <div className="single-ckeck-wrapper">
                            <img
                              src="assets/images/about/dt.png"
                              alt="dotted"
                            />
                            <p>Flexiblity Work Environment</p>
                          </div>
                          {/* <!-- about ncheck wrapper main end -->
                                            <!-- about ncheck wrapper main --> */}
                          <div className="single-ckeck-wrapper">
                            <img
                              src="assets/images/about/dt.png"
                              alt="dotted"
                            />
                            <p>Provide Quality Service</p>
                          </div>
                          {/* <!-- about ncheck wrapper main end --> */}
                        </div>
                      </div>
                      {/* <!-- vedio area start --> */}
                      {/* <div className="vedio-area-start">
                        <a href="#" className="rts-btn btn-primary">
                          Read More{" "}
                          <i className="fa-regular fa-arrow-right"></i>
                        </a>
                        <div className="vedio-icone">
                          <a className=" play-video video-play-button" href="#">
                            <span></span>
                            <p className="text">Play Vedio</p>
                          </a>
                          <div className="video-overlay">
                            <a className="video-overlay-close">×</a>
                          </div>
                        </div>
                      </div> */}
                      {/* <!-- vedio area end --> */}
                    </div>
                    {/* <!-- single nav content end --> */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    {/* <!-- single nav content start --> */}
                    <div className="single-about-content-solar">
                      <p className="disc">
                        Our mission at Green Power Systems is to empower Africa
                        with sustainable energy solutions, create opportunities
                        for communities, and drive innovation that supports
                        economic growth and environmental responsibility.
                      </p>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="left-area-wrapper">
                            <img src="assets/images/about/21.jpg" alt="about" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          {/* <!-- about ncheck wrapper main --> */}
                          <div className="single-ckeck-wrapper">
                            <img
                              src="assets/images/about/dt.png"
                              alt="dotted"
                            />
                            <p>Experienced Team of Exparts</p>
                          </div>
                          {/* <!-- about ncheck wrapper main end -->
                                            <!-- about ncheck wrapper main --> */}
                          <div className="single-ckeck-wrapper">
                            <img
                              src="assets/images/about/dt.png"
                              alt="dotted"
                            />
                            <p>Very first Customers Service</p>
                          </div>
                          {/* <!-- about ncheck wrapper main end -->
                                            <!-- about ncheck wrapper main --> */}
                          <div className="single-ckeck-wrapper">
                            <img
                              src="assets/images/about/dt.png"
                              alt="dotted"
                            />
                            <p>Flexiblity Work Environment</p>
                          </div>
                          {/* <!-- about ncheck wrapper main end -->
                                            <!-- about ncheck wrapper main --> */}
                          <div className="single-ckeck-wrapper">
                            <img
                              src="assets/images/about/dt.png"
                              alt="dotted"
                            />
                            <p>Provide Quality Service</p>
                          </div>
                          {/* <!-- about ncheck wrapper main end --> */}
                        </div>
                      </div>
                      {/* <!-- vedio area start --> */}
                      {/* <div className="vedio-area-start">
                        <a href="#" className="rts-btn btn-primary">
                          Read More{" "}
                          <i className="fa-regular fa-arrow-right"></i>
                        </a>
                        <div className="vedio-icone">
                          <a className=" play-video video-play-button" href="#">
                            <span></span>
                            <p className="text">Play Vedio</p>
                          </a>
                          <div className="video-overlay">
                            <a className="video-overlay-close">×</a>
                          </div>
                        </div>
                      </div> */}
                      {/* <!-- vedio area end --> */}
                    </div>
                    {/* <!-- single nav content end --> */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    {/* <!-- single nav content start --> */}
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
                          <div className="left-area-wrapper">
                            <img src="assets/images/about/21.jpg" alt="about" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          {/* <!-- about ncheck wrapper main --> */}
                          <div className="single-ckeck-wrapper">
                            <img
                              src="assets/images/about/dt.png"
                              alt="dotted"
                            />
                            <p>Experienced Team of Exparts</p>
                          </div>
                          {/* <!-- about ncheck wrapper main end -->
                                            <!-- about ncheck wrapper main --> */}
                          <div className="single-ckeck-wrapper">
                            <img
                              src="assets/images/about/dt.png"
                              alt="dotted"
                            />
                            <p>Very first Customers Service</p>
                          </div>
                          {/* <!-- about ncheck wrapper main end -->
                                            <!-- about ncheck wrapper main --> */}
                          <div className="single-ckeck-wrapper">
                            <img
                              src="assets/images/about/dt.png"
                              alt="dotted"
                            />
                            <p>Flexiblity Work Environment</p>
                          </div>
                          {/* <!-- about ncheck wrapper main end -->
                                            <!-- about ncheck wrapper main --> */}
                          <div className="single-ckeck-wrapper">
                            <img
                              src="assets/images/about/dt.png"
                              alt="dotted"
                            />
                            <p>Provide Quality Service</p>
                          </div>
                          {/* <!-- about ncheck wrapper main end --> */}
                        </div>
                      </div>
                      {/* <!-- vedio area start --> */}
                      {/* <div className="vedio-area-start">
                        <a href="#" className="rts-btn btn-primary">
                          Read More{" "}
                          <i className="fa-regular fa-arrow-right"></i>
                        </a>
                        <div className="vedio-icone">
                          <a className=" play-video video-play-button" href="#">
                            <span></span>
                            <p className="text">Play Vedio</p>
                          </a>
                          <div className="video-overlay">
                            <a className="video-overlay-close">×</a>
                          </div>
                        </div>
                      </div> */}
                      {/* <!-- vedio area end --> */}
                    </div>
                    {/* <!-- single nav content end --> */}
                  </div>
                </div>
                {/* <!-- nav content end -->
                        <!-- tab area start about end --> */}
              </div>
              {/* <!-- about nrighht content area end --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyAbout