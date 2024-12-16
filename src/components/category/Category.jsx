import Category_1 from "@/assets/images/category_1.png";
import Category_2 from "@/assets/images/category_2.png";
import Category_3 from "@/assets/images/category_3.png";
import Category_4 from "@/assets/images/category_4.png";
import Category_5 from "@/assets/images/category_5.png";
import Category_6 from "@/assets/images/category_6.png";

const urls = [
  Category_1,
  Category_2,
  Category_3,
  Category_4,
  Category_5,
  Category_6,
  Category_3,
];

const Category = ({ data }) => {
  console.log(data);

  return (
    <div className="container">
      <p className="text-center mb-12 text-[40px] font-semibold">
        Shop By Category
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {data?.map((item, inx) => (
          <div key={item.id} className="text-center">
            <img
              src={urls[inx]}
              className="w-[167px] h-[167px] rounded-full"
              alt="category image"
            />
            <p className="mt-3 font-semibold text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
