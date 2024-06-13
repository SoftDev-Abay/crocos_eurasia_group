import React, { useState } from "react";
import Button from "@/app/components/Button/Button";
import "./style.scss";
import { useTranslations } from "next-intl";

const Filters = () => {
  const handleFilter = (query: string) => {
    console.log("filterCliked", query);
    setActiveFilter(query);
  };

  const [activeFilter, setActiveFilter] = useState("other_news");

  const t = useTranslations();

  return (
    <div className="filters-wrapper">
      <Button
        className={`filter_button ${
          activeFilter === "partner_news" && "active"
        }`}
        onClick={() => handleFilter("partner_news")}
      >
        {t("pages.news.filters.partners")}
      </Button>
      <Button
        className={`filter_button ${activeFilter === "other_news" && "active"}`}
        onClick={() => handleFilter("other_news")}
      >
        {t("pages.news.filters.agriculture")}
      </Button>
    </div>
  );
};

export default Filters;
