"use client";

import React, { useEffect, useState } from "react";
import { getAboutCompanySolutions } from "@/app/services/AboutCompanyService";
import "./style.scss";
import { AboutCompanySolution } from "@/app/constants/AboutTypes";
import { useTranslations } from "next-intl";

const SolutionsSection = ({
  data,
}: {
  data: AboutCompanySolution[] | null;
}) => {
  const t = useTranslations();

  return (
    <div>
      {data ? (
        <section className="solutions-section">
          <div className="heading">
            <h3>{t("pages.about.solutions.header.title")}</h3>
            <p>{t("pages.about.solutions.header.description")}</p>
          </div>
          <div className="content">
            {data.map((item, index) => (
              <div key={item.id} className="solution-item">
                <h1 className="highlighted">{item.title}</h1>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SolutionsSection;
