import SingleBlog from "@/components/blog/SingleBlog";
import Breadcrumb from "@/components/Breadcrumb";
import React from "react";

type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  const { slug } = params; // <-- extract slug

  return (
    <div>
      <Breadcrumb name="BLOG DETAILS" url="blog" />
      <SingleBlog params={{ slug }} />
    </div>
  );
};

export default Page;
