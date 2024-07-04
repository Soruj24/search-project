/* eslint-disable react/prop-types */
import Input from "./Input";

const Price = ({ handelChange }) => {
  return (
    <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Price</h2>
    <div className="flex flex-col font-extrabold sm:flex-row sm:space-x-2 md:flex-col md:space-x-1 md:space-y-2">
      <label className="flex items-center space-x-2">
        <input
          onChange={handelChange}
          value=""
          type="radio"
          name="price"
          className="form-radio text-blue-500"
        />
        <span>All</span>
      </label>
      <Input handelChange={handelChange} value="50" title="$50" name="price" />
      <Input handelChange={handelChange} value="100" title="$100" name="price" />
      <Input handelChange={handelChange} value="150" title="$150" name="price" />
      <Input handelChange={handelChange} value="200" title="$200" name="price" />
    </div>
  </div>
  );
};

export default Price;
