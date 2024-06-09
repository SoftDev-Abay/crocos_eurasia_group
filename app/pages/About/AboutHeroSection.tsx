"use client";

import React, { useEffect, useState } from "react";
import { getAboutCompanyMain } from "@/app/services/AboutCompanyService";
import "./style.scss";
import { AboutCompanyMain } from "@/app/constants/AboutTypes";
import HeroSection from "@/app/components/Sections/Hero/HeroSection";

const AboutHeroSection = () => {
  const [data, setData] = useState<AboutCompanyMain | null>(null);

  useEffect(() => {
    getAboutCompanyMain()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {data ? (
        <HeroSection
          title={data.title}
          description={data.description}
          image={data.image}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default AboutHeroSection;
