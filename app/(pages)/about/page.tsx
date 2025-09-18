import AboutContact from '@/components/about/AboutContact'
import CompanyAbout from '@/components/about/CompanyAbout'
import EasySteps from '@/components/about/EasySteps'
import Breadcrumb from '@/components/Breadcrumb'
import Feedback from '@/components/Feedback'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div>
        <Breadcrumb name={"ABOUT US"} url={"about"}/>
        <CompanyAbout/>
        <EasySteps/>
        <AboutContact/>
        <Feedback/>
    </div>
  )
}

export default page