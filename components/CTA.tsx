import React from 'react'

type Props = {}

const CTA = (props: Props) => {
  return (
    <div>
      <div className="rts-cta-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-solari-wrapper">
                <div className="left-area">
                  <span className="pre skew-up">
                    <span> Feel Free </span> To Contact US
                  </span>
                  <h4 className="title skew-up">
                    Get Free Consultancy or <br />
                    +1 (800) 123 446 559
                  </h4>
                </div>
                <div className="right-area">
                  <form action="#" className="cta-form">
                    <div className="single-input">
                      <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="single-input">
                      <input type="text" placeholder="Your Email" required/>
                    </div>
                    <button className="rts-btn btn-primary">Get It Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA