import Hero from "@/components/Hero";
import About from "@/components/About";

import dynamic from "next/dynamic";

// reserve space while loading
const CompanyAbout = dynamic(() => import("@/components/about/CompanyAbout"), {
  loading: () => <div style={{ minHeight: "500px" }} />,
});

const WhyChoose = dynamic(() => import("@/components/WhyChoose"), {
  loading: () => <div style={{ minHeight: "500px" }} />,
});

const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <div style={{ minHeight: "200px" }} />,
});

const Facts = dynamic(() => import("@/components/Facts"), {
  loading: () => <div style={{ minHeight: "300px" }} />,
});

const Service = dynamic(() => import("@/components/Service"), {
  loading: () => <div style={{ minHeight: "600px" }} />,
});

const Gallery = dynamic(() => import("@/components/Gallery"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "600px" }} />,
});

const Feedback = dynamic(() => import("@/components/Feedback"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "400px" }} />,
});

const Blog = dynamic(() => import("@/components/Blog"), {
  loading: () => <div style={{ minHeight: "500px" }} />,
});

const page = () => {
  return (
    <div>
      <Hero />
      <About />

      <CompanyAbout />
      <WhyChoose />
      <CTA />

      <Facts />
      <Service />
      <Gallery />
      <Feedback />
      <Blog />
    </div>
  );
};

export default page;
