"use client";

import React, { useEffect, useState } from "react";
import { getMissionsValues } from "@/app/services/OurMissionsService";
import { MissionsValue } from "@/app/constants/MissionsTypes";
import PointsSection from "@/app/components/Sections/Points/PointsSection";
const ValuesSection = ({ data }: { data: MissionsValue[] | null }) => {
  return (
    <div>{data ? <PointsSection points={data} /> : <div>Loading...</div>}</div>
  );
};

export default ValuesSection;
