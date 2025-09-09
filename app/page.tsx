import About from '@/components/About'
import Blog from '@/components/Blog';
import CTA from '@/components/CTA';
import Facts from '@/components/Facts';
import GapTop from '@/components/GapTop';
import Hero from '@/components/Hero'
import Projects from '@/components/Projects';
import Service from '@/components/Service';
import Team from '@/components/Team';
import WhyChoose from '@/components/WhyChoose';
import Script from 'next/script';
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhyChoose/>
      <CTA/>
      <Facts/>
      <Service/>
      {/* <Projects/> */}
      <GapTop/>
      <Team/>
      <Blog/>
    </div>
  );
}

export default page