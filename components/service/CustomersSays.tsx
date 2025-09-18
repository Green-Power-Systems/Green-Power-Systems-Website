import React from "react";

type Props = {};

const CustomersSays = (props: Props) => {
  return (
    <div>
      <div className="rts-customers-says-area rts-section-gapTop bg_image bg-testimonials-1 reveal">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-center title-g">
                <p className="pre">
                  <span>Green Power</span> Solutions
                </p>
                <h2 className="title">Our Vision & Mission</h2>
              </div>
            </div>
          </div>
          <div className="row g-24 pb--110 mt--10">
            <div className="col-lg-4">
              {/* */}
              <div className="rts-single-testimonials-one">
                <div className="logo">
                  <img src="assets/images/testimonials/logo/01.png" alt="" />
                </div>
                <p className="disc">
                  “To be an African most Valued Company that will serve our
                  society, through creating 200 thousand business partners and
                  25 million employees By 2032.”
                </p>
                <div className="awener-area">
                  <a href="#" className="author">
                    <img src="assets/images/testimonials/02.png" alt="images" />
                  </a>
                  <div className="main">
                    <a href="#">
                      <h6 className="title">Green Power Systems</h6>
                    </a>
                    <span>Company Vision</span>
                  </div>
                </div>
              </div>
              {/* */}
            </div>
            <div className="col-lg-4">
              {/* */}
              <div className="rts-single-testimonials-one">
                <div className="logo">
                  <img src="assets/images/testimonials/logo/01.png" alt="" />
                </div>
                <p className="disc">
                  “Sustainable growth through superior customer service, partner
                  and employee, small businesses & suppliers; innovation,
                  quality, and commitment.”
                </p>
                <div className="awener-area">
                  <a href="#" className="author">
                    <img src="assets/images/testimonials/03.png" alt="images" />
                  </a>
                  <div className="main">
                    <a href="#">
                      <h6 className="title">Green Power Systems</h6>
                    </a>
                    <span>Company Mission</span>
                  </div>
                </div>
              </div>
              {/* */}
            </div>
            <div className="col-lg-4">
              {/* */}
              <div className="rts-single-testimonials-one">
                <div className="logo">
                  <img src="assets/images/testimonials/logo/01.png" alt="" />
                </div>
                <p className="disc">
                  “Our core values are innovation, social responsibility &
                  moral, quality, excellence, teamwork & partnership, all to
                  serve our society.”
                </p>
                <div className="awener-area">
                  <a href="#" className="author">
                    <img src="assets/images/testimonials/04.png" alt="images" />
                  </a>
                  <div className="main">
                    <a href="#">
                      <h6 className="title">Green Power Systems</h6>
                    </a>
                    <span>Company Values</span>
                  </div>
                </div>
              </div>
              {/* */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersSays;
