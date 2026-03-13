import Hero from '@/components/Hero'
import About from '@/components/About'


import dynamic from "next/dynamic"

const CompanyAbout = dynamic(() => import("@/components/about/CompanyAbout"));
const WhyChoose = dynamic(() => import("@/components/WhyChoose"));
const CTA = dynamic(() => import("@/components/CTA"));
const Facts = dynamic(() => import('@/components/Facts'))
const Service = dynamic(() => import('@/components/Service'))
const Gallery = dynamic(() => import('@/components/Gallery'))
const Feedback = dynamic(() => import('@/components/Feedback'))
const Blog = dynamic(() => import('@/components/Blog'))

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
  )
}

export default page