import Hero from "@/components/Hero";
import About from "@/components/About";

import dynamic from "next/dynamic";
import Skeleton from "@/components/Skeleton";

const CompanyAbout = dynamic(() => import("@/components/about/CompanyAbout"), {
  loading: () => <Skeleton height={400} />,
});

const WhyChoose = dynamic(() => import("@/components/WhyChoose"), {
  loading: () => <Skeleton height={400} />,
});

const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <Skeleton height={200} />,
});

const Facts = dynamic(() => import("@/components/Facts"), {
  loading: () => <Skeleton height={300} />,
});

const Service = dynamic(() => import("@/components/Service"), {
  loading: () => <Skeleton height={500} />,
});

const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <Skeleton height={500} />,
});

const Feedback = dynamic(() => import("@/components/Feedback"), {
  loading: () => <Skeleton height={400} />,
});

const Blog = dynamic(() => import("@/components/Blog"), {
  loading: () => <Skeleton height={500} />,
});

export default function Page() {
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
}
