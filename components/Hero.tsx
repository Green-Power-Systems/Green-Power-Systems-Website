import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="rts-banner-three-solari relative overflow-hidden min-h-[80vh]">
      {/* Optimized Hero Background */}
      <Image
        src="/assets/images/green/hero-bg-3.webp"
        alt="Renewable energy solar panels"
        fill
        priority
        sizes="100vw"
        quality={70}
        placeholder="blur"
        blurDataURL="/assets/images/green/hero-bg-3-small.jpg"
        className="object-cover"
      />

      <div className="container-full relative z-10">
        <div className="row">
          <div className="col-lg-12">
            <div className="left-banner-content-area-two max-w-[900px]">
              <span className="pre-title">
                Welcome To Green Power Systems PLC
              </span>

              <h1 className="title">
                Empowering Your World <br />
                with Renewable Energy
              </h1>

              <p className="disc">
                Discover innovative solutions in solar, electric vehicles, fast
                charging, and water purification designed to build a sustainable
                future.
              </p>

              <div className="baner-three-button-area flex gap-6 items-center">
                <a href="/about" className="rts-btn btn-primary">
                  Learn More
                </a>

                <div className="call-button flex items-center gap-3">
                  <i className="fa-solid fa-phone"></i>

                  <div className="info">
                    <span>Call Us 24/7</span>
                    <a href="tel:+251911758675">
                      <h6 className="title">+251911758675</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Delay this marquee animation */}
      <div className="marquee hidden md:block">
        <div className="marquee__item">
          <div className="banner-marque-bottom">
            <p>Renewable Energy</p>
            <p>Renewable Energy</p>
            <p>Renewable Energy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
