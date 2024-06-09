import React from "react";
import Button from "@/app/components/Button/Button";
import "./style.scss";

const Filters = () => {
  const handleFilter = () => {
    console.log("filterCliked");
  };

  return (
    <div className="filters">
      <Button onClick={handleFilter}>Новости партнеров</Button>
      <Button onClick={handleFilter}>Новости в сельском хозяйстве</Button>
    </div>
  );
};

export default Filters;
