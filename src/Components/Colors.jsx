/* eslint-disable react/prop-types */
import Input from "./Input";

const Colors = ({ handelChange }) => {
  return (
    <div className="p-4 font-extrabold">
      <h2 className="text-2xl font-bold mb-4">Colors</h2>

      <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <label className="flex items-center space-x-2">
          <input
            onChange={handelChange}
            value=""
            type="radio"
            name="color"
            className="form-radio text-blue-500"
          />
          <span>All</span>
        </label>
        <Input
          handelChange={handelChange}
          value="black"
          title="Black"
          name="color"
          color="black"
        />
        <Input
          handelChange={handelChange}
          value="blue"
          title="Blue"
          name="color"
          color="blue"
        />
        <Input
          handelChange={handelChange}
          value="red"
          title="Red"
          name="color"
          color="red"
        />
        <Input
          handelChange={handelChange}
          value="green"
          title="Green"
          name="color"
          color="green"
        />
      </div>
    </div>
  );
};

export default Colors;
