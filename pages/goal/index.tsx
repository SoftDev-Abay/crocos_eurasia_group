import React from "react";
import ValuesSection from "@/app/pages/Goal/ValuesSection";
import GoalHeroSection from "@/app/pages/Goal/GoalHeroSection";
import Wrapper from "@/app/pages/Wrapper/Wrapper";
const Goal = () => {
  return (
    <>
      <Wrapper>
        <GoalHeroSection />
        <ValuesSection />
      </Wrapper>
    </>
  );
};

export default Goal;
