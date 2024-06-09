"use client";

import React, { useEffect, useState } from "react";
import { getAboutCompanySolutions } from "@/app/services/AboutCompanyService";
import "./style.scss";
import { AboutCompanySolution } from "@/app/constants/AboutTypes";

const SolutionsSection = () => {
  const [data, setData] = useState<AboutCompanySolution[] | null>(null);

  useEffect(() => {
    getAboutCompanySolutions()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <section className="solutions-section">
          <div className="heading">
            <h3>Уникальные решения</h3>
            <p>
              За эти годы мы создали развитую сеть по обеспечению фермеров
              уникальными комплексными решениями в сельском хозяйстве Казахстана
              и Кыргызстана
            </p>
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
