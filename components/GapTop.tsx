import React from 'react'

type Props = {}

const GapTop = (props: Props) => {
  return (
    <div>
      <div className="rts-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="brand-area-h2">
                <a href="#">
                  <img src="assets/images/brand/01.png" alt="brand_start" />
                </a>
                <a href="#">
                  <img src="assets/images/brand/02.png" alt="brand_start" />
                </a>
                <a href="#">
                  <img src="assets/images/brand/03.png" alt="brand_start" />
                </a>
                <a href="#">
                  <img src="assets/images/brand/04.png" alt="brand_start" />
                </a>
                <a href="#">
                  <img src="assets/images/brand/05.png" alt="brand_start" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GapTop