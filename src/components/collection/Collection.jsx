import React from 'react'
import Collection_1 from "@/assets/images/collection_1.png"
import Collection_2 from "@/assets/images/collection_2.png"
import Collection_3 from "@/assets/images/collection_3.png"
import Collection_4 from "@/assets/images/collection_4.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    title: "November Outfits",
    url: Collection_1,
  },
  {
    id: 2,
    title: "Cashmere Set",
    url: Collection_2,
  },
  {
    id: 3,
    title: "The New Nordic",
    url: Collection_3,
  },
  {
    id: 4,
    title: "The Leather",
    url: Collection_4,
  },
];

const Collection = () => {
  return (
    <div className="container py-12 grid grid-cols-2 gap-6">
      {data?.map((item) => (
        <div key={item.id} className="h-[664px] relative">
          <img
            src={item.url}
            className="absolute w-full h-full"
            alt="image"
          />
          <div className="absolute left-12 bottom-12 text-white">
            <p className="text-[34px] font-medium mb-3">{item.title}</p>
            <Link
              className="flex gap-1 items-center border-b w-[96px]"
              to={"/"}
            >
              <span className="font-medium">Collection</span>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collection