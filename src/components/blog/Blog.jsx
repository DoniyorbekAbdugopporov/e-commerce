import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import BlogImg_1 from "@/assets/images/blog_1.png"
import BlogImg_2 from "@/assets/images/blog_2.png"
import BlogImg_3 from "@/assets/images/blog_3.png"

const data = [
  {
    id: 1,
    title: "2023 Holiday Gift Guide",
    url: BlogImg_1,
  },
  {
    id: 2,
    title: "2023 Holiday Gift Guide",
    url: BlogImg_2,
  },
  {
    id: 3,
    title: "2023 Holiday Gift Guide",
    url: BlogImg_3,
  },
];

const blogItems = data?.map((item) => (
  <div key={item.id} className="w-[360px] h-[420px] flex flex-col gap-6">
    <img src={item.url} alt="image" />
    <h2 className='text-2xl font-semibold'>{item.title}</h2>
    <Link
      className="flex gap-1 items-center border-b border-black w-[108px]"
      to={"/"}
    >
      <span className="font-medium">View More</span>
      <FaArrowRightLong />
    </Link>
  </div>
));

const Blog = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between pt-20">
        <h2 className="text-4xl font-medium">Latest Articles</h2>
        <Link
          className="flex gap-1 items-center border-b border-black w-[108px]"
          to={"/"}
        >
          <span className="font-medium">View More</span>
          <FaArrowRightLong />
        </Link>
      </div>
      <div className="grid grid-cols-3 py-6 gap-5">
        {blogItems}
      </div>
    </div>
  );
}

export default Blog