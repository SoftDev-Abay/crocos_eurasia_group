import React from "react";

import "./style.scss";

interface Point {
  id: number;
  title: string;
  subtitle: string;
  icon?: string;
}

const PointBox = ({ item, index }: { item: Point; index: number }) => {
  return (
    <div
      className={`${item.icon ? "point-box_with_icon" : "point-box"} ${
        (index + 1) % 2 === 0 ? "point-box-even" : ""
      }
              `}
    >
      <div className="point-box-content">
        {item.icon && <img src={item.icon} alt="icon" />}
        <h1>{item.title}</h1>
        <p>{item.subtitle}</p>
      </div>
    </div>
  );
};

export default PointBox;
