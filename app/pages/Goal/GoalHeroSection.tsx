"use client";

import React, { useEffect, useState } from "react";

import { getMissionsMain } from "@/app/services/OurMissionsService";
import { MissionsMain } from "@/app/constants/MissionsTypes";

import HeroSection from "@/app/components/Sections/Hero/HeroSection";

const GoalHeroSection = ({ data }: { data: MissionsMain | null }) => {
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

export default GoalHeroSection;
