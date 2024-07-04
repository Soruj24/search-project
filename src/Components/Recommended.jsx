/* eslint-disable react/prop-types */
import Buttons from "./Buttons";

const Recommended = ({ handelClick }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Recommended</h2>
      <div className="flex justify-center space-x-2">
        <Buttons onClickHandler={handelClick} value="" title="All Products" />
        <Buttons onClickHandler={handelClick} value="Nike" title="Nike" />
        <Buttons onClickHandler={handelClick} value="Adidas" title="Adidas" />
        <Buttons onClickHandler={handelClick} value="Puma" title="Puma" />
        <Buttons onClickHandler={handelClick} value="Vans" title="Vans" />
         
      </div>
    </div>
  );
};

export default Recommended;
