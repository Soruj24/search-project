/* eslint-disable react/prop-types */
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
const Navbar = ({ query, handleInputChange }) => {
  return (
    <div className="flex justify-between mt-5">
      <div>
        <input
          onChange={handleInputChange}
          type="text"
          value={query}
          placeholder="Enter your Search Shoes"
          className="w-64 ring-0 h-10 p-2 border border-gray-300 rounded-md"
          aria-label="Search shoes"
        />
      </div>
      <div className="flex gap-5">
        <Link to="#">
          <FiHeart className="text-3xl" />
        </Link>
        <Link to="#">
          {" "}
          <AiOutlineShoppingCart className="text-3xl" />{" "}
        </Link>
        <Link to="#">
          {" "}
          <AiOutlineUserAdd className="text-3xl" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
