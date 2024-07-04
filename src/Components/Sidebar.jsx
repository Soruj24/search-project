/* eslint-disable react/prop-types */
import { GiShoppingCart } from "react-icons/gi";
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";
const Sidebar = ({ handelChange }) => {
  return (
    <section>
      <div className="flex justify-center   my-4">
        <GiShoppingCart className="text-6xl" />
      </div>
       
        <div className="">
          <Category handelChange={handelChange} />
          <Price handelChange={handelChange} />
          <Colors handelChange={handelChange} />
        </div>
       
    </section>
  );
};

export default Sidebar;
