import React from "react";
import "./style.scss";
import PointBox from "./PointBox";

interface Point {
  id: number;
  title: string;
  subtitle: string;
  icon?: string;
}

interface PointsSectionProps {
  points: Point[];
}

const PointsSection = ({ points }: PointsSectionProps) => {
  return (
    <section className="points-section">
      <h3>
        <span>Мы в</span>
        <span className="highlighted"> цифрах</span>
      </h3>
      <div className="content">
        {points.map((item, index) => (
          <PointBox key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default PointsSection;
