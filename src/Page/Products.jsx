/* eslint-disable react/prop-types */
 
const Products = ({result}) => {

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {result}
    </div>
  );
};

export default Products;
