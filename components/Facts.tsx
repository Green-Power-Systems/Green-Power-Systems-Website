import React from 'react'

type Props = {}

const Facts = (props: Props) => {
  return (
    <div>
            <div className="rts-solar-supply-start rts-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="solari-title-area-three text-left">
              <span className="pre-title skew-up">Facts numbers</span>
              <h2 className="title skew-up">
               We are leading suppliers of solar panels,<br />
cables, and related renewable energy materials worldwide.

              </h2>
              <p className="disc skew-up">
                Saving energy offers numerous benefits, both on an <br />
                individual level and for the environment.
              </p>
              <div className="row">
                <div className="col-lg-10">
                  {/* <!-- rts progress bar area start --> */}
                  <div className="rts-progres-bar-area-one">
                    {/* <!-- single progress --> */}
                    <div className="single-progress-area-h4">
                      <div className="progress-top">
                        <p className="name">Solar energy</p>
                        <span className="parcent"> 90% </span>
                      </div>
                      <div className="progress">
                        <div
  className="progress-bar wow fadeInLeft bg-primary"
  role="progressbar"
  style={{ width: '90%' }}
  aria-valuenow={25}
  aria-valuemin={0}
  aria-valuemax={100}
></div>
                      </div>
                    </div>
                    {/* <!-- single progress --> */}
                    {/* <!-- single progress --> */}
                    <div className="single-progress-area-h4">
                      <div className="progress-top">
                        <p className="name">Electric Vehicles</p>
                        <span className="parcent"> 57% </span>
                      </div>
                      <div className="progress">
                        <div
  className="progress-bar wow fadeInLeft bg-yellow"
  role="progressbar"
  style={{ width: '57%' }}
  aria-valuenow={25}
  aria-valuemin={0}
  aria-valuemax={100}
></div>
                      </div>
                    </div>
                    {/* <!-- single progress --> */}
                    {/* <!-- single progress --> */}
                    <div className="single-progress-area-h4">
                      <div className="progress-top">
                        <p className="name">Renewable Energy</p>
                        <span className="parcent"> 77% </span>
                      </div>
                      <div className="progress">
                       <div
  className="progress-bar wow fadeInLeft bg-dark"
  role="progressbar"
  style={{ width: '47%' }}
  aria-valuenow={25}
  aria-valuemin={0}
  aria-valuemax={100}
></div>
                      </div>
                    </div>
                    {/* <!-- single progress --> */}
                  </div>
                  {/* <!-- rts progress bar area end --> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt_sm--40">
            <div className="map-area-h3">
              <div className="thumbnail">
                <img src="assets/images/brand/map.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Facts