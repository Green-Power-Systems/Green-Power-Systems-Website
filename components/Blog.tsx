import React from 'react'

type Props = {}

const Blog = (props: Props) => {
  return (
    <div>
        <div className="rts-solari-blog-area-start rts-section-gap reveal" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="solari-title-area-three text-center">
              <span className="pre-title skew-up">Our Blog</span>
              <h2 className="title skew-up">Latest News Updates</h2>
            </div>
          </div>
        </div>
        <div className="row g-24 mt--30">
          <div className="col-lg-6">
            {/* <!-- single blog area start --> */}
            <div className="single-blog-solaric-lg">
              <a href="blog-details.html" className="thumbnail">
                <img src="assets/images/blog/25.jpg" alt="blog" />
              </a>
              <div className="inner-content-solari-blog">
                <div className="head">
                  <div className="single">
                    <i className="fa-regular fa-clock"></i>
                    <span>25 Jan, 2022</span>
                  </div>
                  <div className="single">
                    <i className="fa-regular fa-user"></i>
                    <span>25 Jan, 2022</span>
                  </div>
                  <div className="single">
                    <i className="fa-light fa-phone-office"></i>
                    <span>7 min Read</span>
                  </div>
                </div>
                <div className="body">
                  <a href="blog-details.html">
                    <h5 className="title">
                      Solar Training Program Series: Why is Remote Energy
                      Focused on Training Solar Educators?
                    </h5>
                  </a>
                  <a href="blog-details.html" className="rts-btn btn-primary"
                    >Read More</a>
                </div>
              </div>
            </div>
            {/* <!-- single blog area end --> */}
          </div>
          <div className="col-lg-6">
            <div className="single-blog-solaric-sm">
              <a href="blog-details.html" className="thumbnail">
                <img src="assets/images/blog/26.jpg" alt="blog-area" />
              </a>
              <div className="inner-content-solari-blog">
                <div className="head">
                  <div className="single">
                    <i className="fa-regular fa-clock"></i>
                    <span>25 Jan, 2022</span>
                  </div>
                  <div className="single">
                    <i className="fa-regular fa-user"></i>
                    <span>25 Jan, 2022</span>
                  </div>
                </div>
                <div className="body">
                  <a href="blog-details.html">
                    <h5 className="title">
                      2019 Gattermann Award wind <br />
                      honors Brad Burkhart Meyer
                    </h5>
                  </a>
                  <a href="blog-details.html" className="rts-btn btn-primary"
                    >Read More</a>
                </div>
              </div>
            </div>
            <div className="single-blog-solaric-sm">
              <a href="blog-details.html" className="thumbnail">
                <img src="assets/images/blog/27.jpg" alt="blog-area" />
              </a>
              <div className="inner-content-solari-blog">
                <div className="head">
                  <div className="single">
                    <i className="fa-regular fa-clock"></i>
                    <span>25 Jan, 2022</span>
                  </div>
                  <div className="single">
                    <i className="fa-regular fa-user"></i>
                    <span>25 Jan, 2022</span>
                  </div>
                </div>
                <div className="body">
                  <a href="blog-details.html">
                    <h5 className="title">
                      2021 Batterman Award honors <br />
                      Brad Burkhart Meyer Green
                    </h5>
                  </a>
                  <a href="blog-details.html" className="rts-btn btn-primary"
                    >Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Blog