import React, { useState } from "react";
import Button from "@/app/components/Button/Button";
import "./style.scss";

const Filters = () => {
  const handleFilter = (query: string) => {
    console.log("filterCliked", query);
    setActiveFilter(query);
  };

  const [activeFilter, setActiveFilter] = useState("other_news");

  return (
    <div className="filters-wrapper">
      <Button
        className={`filter_button ${
          activeFilter === "partner_news" && "active"
        }`}
        onClick={() => handleFilter("partner_news")}
      >
        Новости партнеров
      </Button>
      <Button
        className={`filter_button ${activeFilter === "other_news" && "active"}`}
        onClick={() => handleFilter("other_news")}
      >
        Новости в сельском хозяйстве
      </Button>
    </div>
  );
};

export default Filters;
