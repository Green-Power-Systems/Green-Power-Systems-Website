import React from 'react'

type Props = {}

const Feedback = (props: Props) => {
  return (
    <div className=" mt-5">
      <div className="rts-clients-feedback rts-section-gapBottom bg-feedback-about bg_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="rts-solution-left-area-left">
                <div className="thumbnail">
                  <img src="assets/images/green/feed-3.avif" alt="solution" />
                </div>
                <div className="small-image images">
                  <img src="assets/images/solution/02.jpg" alt="solution" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl--90 pl_md--10 pl_sm--10 mt_md--50 mt_sm--30">
              <div className="feed-back-about-wrapper reveal">
                <div className="title-area-left title-g">
                  <p className="pre ">
                    <span>Green Power</span> Systems
                  </p>
                  <h2 className="title skew-up">
                    Amazing Feedback Say About Services
                  </h2>
                </div>

                <div className="swiper mySwiper-about-feedback">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="feedback-about-swiper-wrapper">
                        <div className="single-feedback-about">
                          <div className="head">
                            {/* <a href="#" className="thumbnail">
                              <img
                                src="assets/images/about/07.png"
                                alt="about"
                              />
                            </a> */}
                            <div className="info">
                              <h5 className="title">Eng. Kidem Tesfaye</h5>
                              <span>CEO, Green Power Systems</span>
                            </div>
                          </div>
                          <div className="body">
                            <p>
                              “Green Power Systems transformed our home with
                              solar energy solutions. Their team was
                              professional, efficient, and the system runs
                              flawlessly, reducing our electricity bills
                              significantly.”
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="feedback-about-swiper-wrapper">
                        <div className="single-feedback-about">
                          <div className="head">
                            {/* <a href="#" className="thumbnail">
                              <img
                                src="assets/images/about/07.png"
                                alt="about"
                              />
                            </a> */}
                            <div className="info">
                              <h5 className="title">Eng.Sirak</h5>
                              <span>Manager, Green Power Systems</span>
                            </div>
                          </div>
                          <div className="body">
                            <p>
                              “The installation of the electric vehicle charging
                              station by Green Power Systems was seamless. Their
                              innovative solutions and attention to detail
                              exceeded our expectations.”
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="feedback-about-swiper-wrapper">
                        <div className="single-feedback-about">
                          <div className="head">
                            {/* <a href="#" className="thumbnail">
                              <img
                                src="assets/images/about/07.png"
                                alt="about"
                              />
                            </a> */}
                            <div className="info">
                              <h5 className="title">Eng. Kidem Tesfaye</h5>
                              <span>CEO, Green Power Systems</span>
                            </div>
                          </div>
                          <div className="body">
                            <p>
                              “Thanks to Green Power Systems, our office now
                              runs entirely on renewable energy. The team’s
                              professionalism and commitment to sustainability
                              are truly impressive.”
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback