import React from "react";
import "./style.scss";
import { useTranslations } from "next-intl";

const NewsHeader = () => {
  const t = useTranslations();

  return (
    <div className="header">
      <h3>{t("pages.news.header.title")}</h3>
      <p>{t("pages.news.header.description")}</p>
    </div>
  );
};

export default NewsHeader;
