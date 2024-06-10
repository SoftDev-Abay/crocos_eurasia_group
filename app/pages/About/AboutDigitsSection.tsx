"use client";

import React, { useEffect, useState } from "react";
import { getAboutCompanyDigits } from "@/app/services/AboutCompanyService";
import "./style.scss";
import { AboutCompanyDigit } from "@/app/constants/AboutTypes";
import PointsSection from "@/app/components/Sections/Points/PointsSection";

const AboutDigitsSection = ({ data }: { data: AboutCompanyDigit[] | null }) => {
  return (
    <div>{data ? <PointsSection points={data} /> : <div>Loading...</div>}</div>
  );
};

export default AboutDigitsSection;
