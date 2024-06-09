"use client";

import React, { useEffect, useState } from "react";
import { getAboutCompanyDigits } from "@/app/services/AboutCompanyService";
import "./style.scss";
import { AboutCompanyDigit } from "@/app/constants/AboutTypes";
import PointsSection from "@/app/components/Sections/Points/PointsSection";

const AboutDigitsSection = () => {
  const [data, setData] = useState<AboutCompanyDigit[] | null>(null);

  useEffect(() => {
    getAboutCompanyDigits()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>{data ? <PointsSection points={data} /> : <div>Loading...</div>}</div>
  );
};

export default AboutDigitsSection;
