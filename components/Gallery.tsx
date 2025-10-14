import React from "react";

// Define the shape for a single gallery item
interface GalleryItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
}

// Define the data for the gallery items
const galleryData: GalleryItem[] = [
  {
    id: 1,
    imageSrc: "/assets/images/green/gallery/kas-450.jpg",
    title: "Model : Kas-Jan450",
    description:
      "EV Motor Power: 60 Kw, Battery : Lithium Ion, Capacity: 38.40 Kwh",
  },
  {
    id: 2,
    imageSrc: "/assets/images/green/gallery/kas-200.jpg",
    title: "Model : Kas-Anna200",
    description:
      "EV Motor Power: 25 Kw, Battery : LifePo4, Capacity: 17.28 Kwh",
  },
  {
    id: 3,
    imageSrc: "/assets/images/green/gallery/kas-360.jpg",
    title: "Model : Kas-Anna360",
    description:
      "EV Motor Power: 33 Kw, Battery : Ternary Lithium Ion, Capacity : 26.68Kwh",
  },
  {
    id: 4,
    imageSrc: "/assets/images/green/gallery/kas-320.jpg",
    title: "Model : Kas-Pansahn 320",
    description:
      "EV Motor Power: 120 Kw, Battery : Lithium Ion, Capacity: 81.60 Kwh",
  },
  {
    id: 5,
    imageSrc: "/assets/images/green/gallery/ro50g.avif",
    title: "Model: RO-50G-4",
    description:
      "This is a high-capacity, 5-stage RO under-sink water purifier managed by a microprocessor, certified by CE, ISO, and RoHS.",
  },
  {
    id: 6,
    imageSrc: "/assets/images/green/gallery/m14.jpg",
    title: "Model: RO-M-14",
    description:
      "The RO-M-14 is an advanced, microprocessor-controlled, 5-stage RO water purifier ideal for both high-volume commercial and luxury residential use",
  },
  {
    id: 7,
    imageSrc: "/assets/images/green/gallery/ry14g.avif",
    title: "Model: RY-14G-1",
    description:
      "The RY-14G-1 is an advanced, microprocessor-controlled, 5-stage RO water purification system delivering 188 L/day of pure.",
  },
  {
    id: 8,
    imageSrc: "/assets/images/green/gallery/power-cables.webp",
    title: "Power Cables",
    description:
      "Robust submarine cables for seamless, long-distance data and power transmission across any body of water. ",
  },
  {
    id: 9,
    imageSrc: "/assets/images/green/gallery/compact-substations.jpeg",
    title: "Compact Substations",
    description:
      "To effectively Provide Compact Substations, focus on their key customer benefits: space efficiency, speed of deployment, and comprehensive protection.",
  },
  {
    id: 10,
    imageSrc: "/assets/images/green/gallery/switch-gear-control-panel.jpg",
    title: "Electric Switch Grears and Control Panels",
    description:
      "High-performance Electric Switchgear and Control Panels: Engineered for maximum system protection, precise control, and reliable power distribution",
  },
  {
    id: 11,
    imageSrc: "/assets/images/green/gallery/transformer.jpg",
    title: "Transformers",
    description:
      "Maximize your energy return with our high-efficiency transformers, guaranteeing reliable power conversion and minimal energy loss for any application.",
  },
  {
    id: 12,
    imageSrc: "/assets/images/green/gallery/tire.jpeg",
    title: "Tyres",
    description:
      "High-performance, durable tyres designed for maximum safety, comfort, and long-lasting road grip.",
  },
];

// Define a constant for the desired image size (e.g., 300px by 300px)
const IMAGE_SIZE = "300px";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <div>
      <div className="rts-project-page-project rts-section-gap">
        <div className="container">
          {/* Section Title (similar to About page) */}
          <div className="solari-title-area-three text-center mb--50">
            <span className="pre-title skew-up">Our Gallery</span>
            <h2 className="title skew-up">
              Discover Our Products and Innovative Solutions
            </h2>
          </div>

          <div className="row g-4">
            {galleryData.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
                {/* 1. Apply size to the gallery-wrapper to create a uniform container */}
                <div
                  className="gallery-wrapper"
                  style={{
                    width: "100%",
                    height: IMAGE_SIZE,
                    overflow: "hidden",
                  }}
                >
                  {/* 2. Apply styling to the image for full coverage and proper scaling */}
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* The clickable overlay for the image */}
                  <a href={item.imageSrc} className="gallery-image">
                    <div className="item-overlay">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 50 50"
                          fill="none"
                        >
                          <path
                            d="M35.7999 23.8H26.2V14.1999C26.2 13.5377 25.6624 13 24.9999 13C24.3376 13 23.8 13.5377 23.8 14.1999V23.8H14.1999C13.5377 23.8 13 24.3376 13 24.9999C13 25.6624 13.5377 26.2 14.1999 26.2H23.8V35.7999C23.8 36.4623 24.3376 37 24.9999 37C25.6624 37 26.2 36.4623 26.2 35.7999V26.2H35.7999C36.4623 26.2 37 25.6624 37 24.9999C37 24.3376 36.4623 23.8 35.7999 23.8Z"
                            fill="white"
                          />
                          <circle cx="25" cy="25" r="24.5" stroke="white" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>

                {/* Image Title and Description */}
                <div style={{ padding: "10px 0", textAlign: "center" }}>
                  <h4
                    style={{
                      fontSize: "2rem",
                      marginBottom: "5px",
                      color: "#333",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      color: "rgba(51, 51, 51, 0.7)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
