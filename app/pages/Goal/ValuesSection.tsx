"use client";

import React, { useEffect, useState } from "react";
import { getMissionsValues } from "@/app/services/OurMissionsService";
import { MissionsValue } from "@/app/constants/MissionsTypes";
import PointsSection from "@/app/components/Sections/Points/PointsSection";
const ValuesSection = () => {
  const [data, setData] = useState<MissionsValue[] | null>(null);

  useEffect(() => {
    getMissionsValues()
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

export default ValuesSection;
