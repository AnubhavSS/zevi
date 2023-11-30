import React, { FC, useState } from "react";
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Product } from "./Results";
import "./Results/style.sass";
type ITEM = {
  item: Product;
};

const Card: FC<ITEM> = ({ item }) => {
  const [heart, setheart] = useState<boolean>(false);
  const [viewDetail, setviewDetail] = useState<boolean>(false);

  return (
    <div
      className="card"
      key={item.id}
      onMouseEnter={() => setviewDetail(true)}
      onMouseLeave={() => setviewDetail(false)}
    >
      <div className="imageContainer">
        {heart ? (
          <AiFillHeart
            className="heart"
            style={{ color: "#D32424", cursor: "pointer" }}
            onClick={() => setheart((prev) => !prev)}
          />
        ) : (
          <AiOutlineHeart
            className="heart"
            style={{ color: "#FFF", cursor: "pointer" }}
            onClick={() => setheart((prev) => !prev)}
          />
        )}
        {viewDetail && <div className="bottomBar">View Details</div>}
        <img alt="ecommerce" className="image" src={item.image} />
      </div>
      <div style={{ marginTop: 4 }}>
        <h3 className="name">{item.name}</h3>
        <h2 className="price">
          <span className="oldPrice">Rs.{parseInt(item.price) + 200}</span>
          Rs.{parseInt(item.price)}
        </h2>
        <div style={{ color: "#FDD33D" }}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
    </div>
  );
};

export default Card;
