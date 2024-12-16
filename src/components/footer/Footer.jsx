import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";
import PaymentMethodImg_1 from "@/assets/images/Payment Methods.png";
import PaymentMethodImg_2 from "@/assets/images/Payment Methods (1).png";
import PaymentMethodImg_3 from "@/assets/images/Payment Methods (2).png";
import PaymentMethodImg_4 from "@/assets/images/Payment Methods (3).png";
import PaymentMethodImg_5 from "@/assets/images/Payment Methods (4).png";
import PaymentMethodImg_6 from "@/assets/images/Payment Methods (4).png";

const Footer = () => {
  return (
    <div className="bg-[#E8ECEF]">
      <div className="container grid grid-cols-3 gap-8 border-b-2 border-slate-600 py-20">
        <div className="flex flex-col gap-10">
          <Link className="text-3xl font-semibold" to={"/"}>
            3legant.
          </Link>
          <div className="flex flex-col gap-2">
            <p>43111 Hai Trieu street,</p>
            <p>District 1, HCMC</p>
            <p>Vietnam</p>
            <p>84-756-3237</p>
          </div>
          <div className="flex gap-5 text-2xl">
            <FaInstagram />
            <FiFacebook />
            <FiYoutube />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-12">
            <h3 className="text-xl font-medium">Page</h3>
            <div className="flex flex-col gap-6">
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>Shop</Link>
              <Link to={"/"}>Product</Link>
              <Link to={"/"}>Articles</Link>
              <Link to={"/"}>Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <h3 className="text-xl font-medium">Info</h3>
            <div className="flex flex-col gap-6">
              <Link to={"/"}>Shipping Policy</Link>
              <Link to={"/"}>Return & Refund</Link>
              <Link to={"/"}>Support</Link>
              <Link to={"/"}>FAQs</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <h2>Join Newsletter</h2>
          <p>
            Subscribe our newsletter to get more deals, new products and
            promotions
          </p>
          <div className="flex items-center justify-between w-full h-10 px-2 border border-slate-400 rounded-3xl ">
            <input
              className="bg-[#E8ECEF] w-full border-none outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <button className="w-8 h-8 rounded-full text-white flex items-center justify-center bg-blue-600">
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-between">
        <div className="flex gap-6 py-12">
          <p className="border-r-2 border-slate-600 pr-6">
            Copyright © 2023 3legant. All rights reserved
          </p>
          <p> Privacy Policy</p>
          <p>Conditions</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src={PaymentMethodImg_1} alt="image" />
          <img src={PaymentMethodImg_2} alt="image" />
          <img src={PaymentMethodImg_3} alt="image" />
          <img src={PaymentMethodImg_4} alt="image" />
          <img src={PaymentMethodImg_5} alt="image" />
          <img src={PaymentMethodImg_6} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
