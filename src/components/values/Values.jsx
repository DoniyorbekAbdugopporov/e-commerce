import React from 'react'
import Img_1 from "@/assets/images/delivery.svg";
import Img_2 from '@/assets/images/money.svg';
import Img_3 from '@/assets/images/lock.svg';
import Img_4 from "@/assets/images/call.svg";

const data = [
  {
    id: 1,
    url: Img_1,
    title: "Free Shipping",
    desc: "Order above $200",
  },
  {
    id: 2,
    url: Img_2,
    title: "Money-back",
    desc: "30 days guarantee",
  },
  {
    id: 3,
    url: Img_3,
    title: "Secure Payments",
    desc: "Secured by Stripe",
  },
  {
    id: 4,
    url: Img_4,
    title: "24/7 Support",
    desc: "Phone and Email support",
  },
];

const valueItems = data?.map((item) => (
  <div className="flex flex-col gap-4" key={item.id}>
    <img className="w-12" src={item.url} alt="image" />
    <h3 className="text-2xl font-medium">{item.title}</h3>
    <p className="text-[#6C7275]">{item.desc}</p>
  </div>
));

const Values = () => {
  return (
    <div className="container flex items-center justify-between py-20">
      {valueItems}
    </div>
  );
}

export default Values