/* eslint-disable react/prop-types */
const Input = ({ handelChange, value, title, name, color }) => {
  return (
    <label className="flex items-center space-x-4">

      <input
        onChange={handelChange}
        value={value}
        type="radio"
        name={name}
        className="form-radio text-blue-500"
      />
      <span style={{ color: color }} >{title}</span>
      
    </label>
  );
};


export default Input;
