import React from "react";
import Button from "../../Button/Button";
import ArrowOutwardIcon from "../../../icons/ArrowOutwardIcon";
import "./style.scss";
import DOMPurify from "dompurify";
import { useTranslations } from "next-intl";
interface HeroSectionProps {
  title: string;
  description: string;
  image: string;
}

const HeroSection = ({ title, description, image }: HeroSectionProps) => {
  const t = useTranslations();

  return (
    <div className="hero-section">
      <div className="container">
        <div className="content">
          <h1>
            <span className="highlighted">{title.split(" ")[0]}</span>
            <span>{" " + title.split(" ")[1]}</span>
          </h1>
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <Button
            className="button"
            onClick={() => console.log("Button clicked")}
          >
            <span>{t("components.sections.hero.contact_button")}</span>
            <ArrowOutwardIcon />
          </Button>
        </div>

        <div className="img-wrapper">
          <img src={image} alt="hero" />
          <h1 className="cover-header">
            <span className="first-word">{title.split(" ")[0]}</span>
            <span className="second-word">{" " + title.split(" ")[1]}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
