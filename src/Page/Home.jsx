import { useState } from "react";
import Navbar from "../Components/Navbar";
import Recommended from "../Components/Recommended";
import Sidebar from "../Components/Sidebar";
import Products from "./Products";

import products from "../db";
import Card from "../Components/Card";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");

  // search filter
  const handelInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()) !== -1
  );

  // Radio filter

  const handelChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button Filter

  const handelClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = (product, selected, query) => {
    let filteredProducts = product;

    // filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      <div className="md:flex ">
        <div className="w-1/3 ">
          <Sidebar handelChange={handelChange} />
        </div>
        <div className="w-2/3 ">
          <Navbar query={query} handelInputChange={handelInputChange} />
          <Recommended  handelClick={handelClick}/>
          <Products  result={result}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
