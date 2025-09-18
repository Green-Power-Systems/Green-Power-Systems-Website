import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div>
      <div className="rts-banner-three-solari">
        <div className="container-full">
          <div className="row">
            <div className="col-lg-12 order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2">
              <div className="left-banner-content-area-two">
                <span className="pre-title skew-up">
                  Welcome To Green Power Systems PLC
                </span>
                <h1 className="title skew-up">
                  Empoweringg Your World <br />
                  with Renewable Energy
                </h1>
                <p className="disc skew-up">
                  Discover innovative solutions in solar, electric vehicles,
                  fast charging, and water purification, <br />
                  all designed to build a sustainable future.
                </p>

                <div className="baner-three-button-area">
                  <a
                    href="appoinment.html"
                    className="rts-btn btn-primary skew-up"
                  >
                    Learn More
                  </a>
                  <div className="call-button">
                    <i className="fa-solid fa-phone"></i>
                    <div className="info">
                      <span className="skew-up">Call Us 24/7</span>
                      <a href="tel:+251911758675">
                        <h6 className="title skew-up">+251911758675</h6>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="vedio-icone">
                  <a className="video-play-button " href="/">
                    <span></span>
                  </a>
                  <div className="video-overlay">
                    <a className="video-overlay-close">×</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="marquee">
          <div className="marquee__item">
            <div className="banner-marque-bottom">
              <p>Renewable Energy</p>
              <p>Renewable Energy</p>
              <p>Renewable Energy</p>
              <p>Renewable Energy</p>
            </div>
          </div>
          <div className="marquee__item">
            <div className="banner-marque-bottom">
              <p>Renewable Energy</p>
              <p>Renewable Energy</p>
              <p>Renewable Energy</p>
              <p>Renewable Energy</p>
            </div>
          </div>
          <div className="marquee__item">
            <div className="banner-marque-bottom">
              <p>Renewable Energy</p>
              <p>Renewable Energy</p>
              <p>Renewable Energy</p>
              <p>Renewable Energy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
