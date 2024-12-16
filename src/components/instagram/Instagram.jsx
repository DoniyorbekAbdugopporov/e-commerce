import Image_1 from "@/assets/images/instagram_1.png";
import Image_2 from "@/assets/images/instagram_2.png";
import Image_3 from "@/assets/images/instagram_3.png";
import Image_4 from "@/assets/images/instagram_4.png";

const Instagram = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-3 items-center justify-center py-10">
        <h3 className="font-bold text-slate-600">NEWSFEED</h3>
        <h2 className="text-4xl font-semibold">Instagram</h2>
        <p className="font-medium">
          Follow us on social media for more discount & promotions
        </p>
        <p className="text-xl text-center text-slate-500 font-medium">
          @3legant_official
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 py-6">
        <img src={Image_1} alt="image" />
        <img src={Image_2} alt="image" />
        <img src={Image_3} alt="image" />
        <img src={Image_4} alt="image" />
      </div>
    </div>
  );
};

export default Instagram;
