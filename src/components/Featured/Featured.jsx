import { BsFillStarFill, BsStars } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import "./featured.css";

const arr = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];
const Card = ({ img }) => {
  return (
    <div class="lg:w-1/3 sm:w-1/2 p-8 ">
      <div className="border rounded-xl border-black c-card overflow-hidden ">
        <div className="c-card overflow-hidden">
          <img
            alt="gallery"
            className="lg:h-60 md:h-48 w-full object-cover object-center "
            src={img}
          />
        </div>
        <div class="px-8 py-4 w-full   bg-white ">
          <div className="flex justify-between items-center">
            <div className="mb-2">
              <h2 class=" text-md text-ellipsis overflow-hidden whitespace-nowrap max-w-[10ch] font-bold text-black ">
                Berlin
              </h2>
              <p>Germany</p>
            </div>
            <div className="flex items-center text-2xl">
              <p className="text-black">4.5</p>
              <BsFillStarFill className=" mx-3 text-yellow-400" />
            </div>
          </div>
          <h1 class="  text-ellipsis overflow-hidden whitespace-nowrap text-lg font-medium text-black ">
            Morning Stars Hotel
          </h1>

          <p className="demo1">
            Beautiful sea-side hotel with a stunning balcony view. Very
            attractive and beautiful interior design and luxury Beautiful
            sea-side hotel with a stunning balcony view. Beautiful sea-side
            hotel with a stunning balcony view.
          </p>

          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            edit={false}
            value={4.5}
          />
          <button className="active:scale-[0.934] transition-all ease-linear duration-75 py-0 px-3 h-10 self-center bg-green-400 mt-4 rounded-md text-black hover:bg-green-500">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};
const Featured = () => {
  return (
    <section class="text-gray-600 body-font">
      <h1 className="text-6xl text-black text-center mt-16 ">
        Fetured Hotel{" "}
        <span>
          <BsStars className="inline text-yellow-400" />
        </span>{" "}
      </h1>

      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {arr.map((e, i) => (
            <Card img={e} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
