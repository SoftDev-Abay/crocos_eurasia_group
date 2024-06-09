import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import Wrapper from "@/app/pages/Wrapper/Wrapper";
import AboutDigitsSection from "@/app/pages/About/AboutDigitsSection";
import AboutHeroSection from "@/app/pages/About/AboutHeroSection";
import SolutionsSection from "@/app/pages/About/SolutionsSection";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Wrapper>
        <AboutHeroSection />
        <AboutDigitsSection />
        <SolutionsSection />
      </Wrapper>
    </>
  );
}
