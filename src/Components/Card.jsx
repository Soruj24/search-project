/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div className="flex justify-center items-center p-4 sm:p-0">
      <section className="flex flex-col  w-full max-w-xs sm:max-w-md items-center border rounded-lg hover:shadow-lg p-4">
        <img src={img} alt="Product Image" className="  object-cover" />
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <section className="flex items-center justify-center mt-2">
            {star} {star} {star} {star}
            <span className="ml-2 text-sm">{reviews}</span>
          </section>
          <div className="flex items-center justify-center mt-2 space-x-2">
            <del className="text-gray-500">{prevPrice}</del>
            <span className="text-lg font-semibold text-red-500">${newPrice}</span>
            <BsFillBagHeartFill className="text-black" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Card;
