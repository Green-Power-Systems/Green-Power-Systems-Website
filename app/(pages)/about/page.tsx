import CompanyAbout from '@/components/about/CompanyAbout'
import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div>
        <Breadcrumb name={"ABOUT US"} url={"about"}/>
        <CompanyAbout/>
    </div>
  )
}

export default page