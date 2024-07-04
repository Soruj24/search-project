/* eslint-disable react/prop-types */
const Buttons = ({ onClickHandler, value, title }) => {
 
  return (
    <button
      onClick={ onClickHandler}
      value={value}
      className="bg-slate-200 hover:bg-slate-300 focus:ring text-black font-bold py-2 px-4 rounded-full"
    >
      {title}
    </button>
  );
};

export default Buttons;
