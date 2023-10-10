import React, { FC, useEffect, useState, useRef } from "react";
import { faker } from "@faker-js/faker";
import "./style.sass";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Product } from "../Results";

interface Suggestion {
  id: string;
  name: string;
}

const Home: FC = () => {
  const [values, setValues] = useState<Suggestion[]>([]);
  const [prod, setprod] = useState<Product[]>([]);
  const [search, setsearch] = useState("");
  const newRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setValues([]);
    setprod([])
    // Define a function to generate and push a suggestion into the values array
    const generateSuggestion = () => {
      const suggestion: Suggestion = {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
      };
      setValues((prevValues) => [...prevValues, suggestion]);
    };

    const generateProducts = () => {
      const product: Product = {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: "shirt" }),
      };
      setprod((prevValues) => [...prevValues, product]);
    };

    // Run the function 5 times
    for (let i = 0; i < 5; i++) {
      generateSuggestion();
      generateProducts()
    }
  }, [search]); // Empty dependency array to run only once on component mount

  const handleOutsideClick = (e: MouseEvent) => {
    if (newRef.current && !newRef.current.contains(e.target as Node)) {
      setsearch("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []); // Empty dependency array to run only once on component moun

  const handleClick = () => {
    navigate("/result");
  };

  return (
    <div
      className="main_container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div ref={newRef}>
        {" "}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <input
            type="text"
            placeholder="Search "
            className="searchBarSS"
            onFocus={() => {
              setsearch(" ");
            }}
            onChange={(e) => setsearch(e.target.value)}
            value={search}
          />
          <div className="searchIcon">
            <CiSearch />
          </div>
        </div>
        {search.length > 0 && (
          <div className="dropdown">
            <p className="popular">Latest Trends</p>
            <div className="trends">
            { prod.slice(0,3).map((item)=>{return(
            <div className="prodContainer" key={item.id} onClick={handleClick}>
              <img src={item.image} alt={item.name}/>
              <p>{item.name}</p>
            </div>)})}
</div>
            <p className="popular">Popular suggestions</p>
            {values.slice(0, 5).map((item) => (
              <div className="dropdownRow" key={item.id} onClick={handleClick}>
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
  
    </div>
  );
};

export default Home;
