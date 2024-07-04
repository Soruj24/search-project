/* eslint-disable react/prop-types */
import Input from "./Input";
const Category = ({ handelChange }) => {
  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Category</h1>
    <div className="flex flex-col sm:flex-row sm:space-x-2 md:flex-col md:space-x-0 md:space-y-2 font-extrabold">
      <label className="flex items-center space-x-2">
        <input
          onChange={handelChange}
          value=""
          type="radio"
          name="category"
          className="form-radio text-blue-500"
        />
        <span>All</span>
      </label>
      <Input handelChange={handelChange} value="sneakers" title="Sneakers" name="category" />
      <Input handelChange={handelChange} value="flats" title="Flats" name="category" />
      <Input handelChange={handelChange} value="sandals" title="Sandals" name="category" />
      <Input handelChange={handelChange} value="heels" title="Heels" name="category" />
    </div>
  </div>
  );
};

export default Category;
