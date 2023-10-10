import React, { useState, useEffect, FC } from "react";
import { faker } from "@faker-js/faker";
import "./style.sass";
import { AiFillFilter } from "react-icons/ai";
import Card from "../Card";
import Filter from "../Filter";



export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const Results: FC = () => {

    const isSmallScreen = window.innerWidth < 768;
    
    const [search, setsearch] = useState("");
  const [values, setValues] = useState<Product[]>([]);
  const [showFilter, setshowFilter] = useState<boolean>(false)

  useEffect(() => {
    setValues([]);
    // Define a function to generate and push a suggestion into the values array
    const generateProducts = () => {
      const product: Product = {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: "shirt" }),
      };
      setValues((prevValues) => [...prevValues, product]);
    };

    // Run the function 5 times
    for (let i = 0; i < 10; i++) {
      generateProducts();
    }
  }, [search]); // Empty dependency array to run only once on component mount

const handleClick=()=>{
    setshowFilter(prev=>!prev); 
    
    
}

  return (
    <div>
        <input
            type="text"
            placeholder="Search "
            className="searchBar"
            onChange={(e) => setsearch(e.target.value)}
            value={search}
          />
    <div className="searchContainer">
  <p className="searchResult">Search Result</p>
  <div className="filterIcon"  onClick={handleClick}><AiFillFilter /></div>
</div>
      <div className="mainContainer">
      { isSmallScreen?<div className={`filter`} style={{display:`${showFilter?'block':'none'}`}}><Filter /></div>: <div className={`filter`}><Filter /></div>}
        <div >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {values.map((item) => (
              <Card item={item} key={item.id} />
            ))}{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Results;
