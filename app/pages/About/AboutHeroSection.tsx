"use client";

import React, { useEffect, useState } from "react";
import { getAboutCompanyMain } from "@/app/services/AboutCompanyService";
import "./style.scss";
import { AboutCompanyMain } from "@/app/constants/AboutTypes";
import HeroSection from "@/app/components/Sections/Hero/HeroSection";

const AboutHeroSection = ({ data }: { data: AboutCompanyMain }) => {
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
