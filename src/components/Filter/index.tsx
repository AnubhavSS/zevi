import React from "react";
import "./style.sass";
import { AiOutlineDown, AiFillStar } from "react-icons/ai";

const Filter = () => {
  return (
    <div className="card">
      <div className="component">
        <div className="topsd">
          <p>BRAND</p>
          <AiOutlineDown />
        </div>

        <div className="checkbox-container">
          <input type="checkbox" id="myCheckbox" />
          <label htmlFor="myCheckbox">Mango</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="myCheckbox" />
          <label htmlFor="myCheckbox">H&M</label>
        </div>
      </div>

      <div className="component">
        <div className="topsd">
          <p>PRICE RANGE</p>
          <AiOutlineDown />
        </div>

        <div className="checkbox-container">
          <input type="checkbox" id="myCheckbox" />
          <label htmlFor="myCheckbox">Under 500</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="myCheckbox" />
          <label htmlFor="myCheckbox">1000 To 3000</label>
        </div>
      </div>

      <div className="component">
        <div className="topsd">
          <p>RATINGS</p>
          <AiOutlineDown />
        </div>

        <div className="checkbox-container">
          <input type="checkbox" id="myCheckbox" />
          <div style={{ color: "#FDD33D" }}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="myCheckbox" />
          <div style={{ color: "#FDD33D" }}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar style={{ color: "#CDCCC8" }} />
          </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="myCheckbox" />
          <div style={{ color: "#FDD33D" }}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar style={{ color: "#CDCCC8" }} />
            <AiFillStar style={{ color: "#CDCCC8" }} />
          </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="myCheckbox" />
          <div style={{ color: "#FDD33D" }}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar style={{ color: "#CDCCC8" }} />
            <AiFillStar style={{ color: "#CDCCC8" }} />
            <AiFillStar style={{ color: "#CDCCC8" }} />
          </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="myCheckbox" />
          <div style={{ color: "#CDCCC8" }}>
            <AiFillStar style={{ color: "#FDD33D" }} />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
