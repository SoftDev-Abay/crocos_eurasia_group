import React from "react";
import "./style.scss";
import PointBox from "./PointBox";
import { useTranslations } from "next-intl";

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
  const t = useTranslations();

  return (
    <section className="points-section">
      <h3>
        <span>{t("components.sections.points.title.first")}</span>
        <span className="highlighted">
          {" "}
          {t("components.sections.points.title.second")}
        </span>
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
