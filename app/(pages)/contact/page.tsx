import Breadcrumb from '@/components/Breadcrumb';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactUsForm from '@/components/contact/ContactUsForm';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Breadcrumb name={"CONTACT US"} url={"contact"} />
      <ContactInfo/>
      <ContactUsForm/>
    </div>
  );
}

export default page