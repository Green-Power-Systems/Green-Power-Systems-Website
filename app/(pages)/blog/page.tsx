import Breadcrumb from '@/components/Breadcrumb';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Breadcrumb name={"BLOGS"} url={"blog"} />
    </div>
  );
}

export default page