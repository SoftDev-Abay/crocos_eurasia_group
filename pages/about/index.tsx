import React from "react";
import Wrapper from "@/app/pages/Wrapper/Wrapper";
import AboutDigitsSection from "@/app/pages/About/AboutDigitsSection";
import AboutHeroSection from "@/app/pages/About/AboutHeroSection";
import SolutionsSection from "@/app/pages/About/SolutionsSection";
const About = () => {
  return (
    <>
      <Wrapper>
        <AboutHeroSection />
        <AboutDigitsSection />
        <SolutionsSection />
      </Wrapper>
    </>
  );
};

export default About;
