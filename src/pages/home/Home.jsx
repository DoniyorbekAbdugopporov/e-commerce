import Banner from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
import Brands from "@/components/brands/Brands";
import Category from "@/components/category/Category";
import Collection from "@/components/collection/Collection";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Instagram from "@/components/instagram/Instagram";
import Products from "@/components/products/Products";
import Promotion from "@/components/promotion/Promotion";
import Values from "@/components/values/Values";
import { useFetch } from "@/hooks/useFetch";

const Home = () => {
  const { data, error, loading } = useFetch("/product/get");
  const { data: categories } = useFetch("/product-category/get");
  return (
    <div>
      <Hero />
      <Brands />
      <Products
        title={{
          name: "Just In",
          style: "",
        }}
        style={{
          parent: "flex gap-3 overflow-auto",
          child: "w-full min-w-[262px]",
        }}
        isAdmin={false}
        data={data}
      />
      <Category data={categories} />
      <Collection />
      <Products
        title={{
          name: "Best Seller",
          style: "text-center",
        }}
        style={{ parent: "grid grid-cols-4 gap-6", child: "" }}
        isAdmin={false}
        data={data}
      />
      <Banner />
      <Promotion />
      <Blog />
      <Instagram />
      <Values />
      <Footer />
    </div>
  );
};

export default Home;
