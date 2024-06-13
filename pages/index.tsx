import React from "react";
import Wrapper from "@/app/pages/Wrapper/Wrapper";
import AboutDigitsSection from "@/app/pages/About/AboutDigitsSection";
import AboutHeroSection from "@/app/pages/About/AboutHeroSection";
import SolutionsSection from "@/app/pages/About/SolutionsSection";
import {
  getAboutCompanyMain,
  getAboutCompanyDigits,
  getAboutCompanySolutions,
} from "@/app/services/AboutCompanyService";
import {
  AboutCompanyDigit,
  AboutCompanyMain,
  AboutCompanySolution,
} from "@/app/constants/AboutTypes";

export async function getServerSideProps({ locale }: { locale: string }) {
  let aboutCompanyMainData;
  let aboutCompanyDigitsData;
  let aboutCompanySolutionsData;

  try {
    const aboutCompanyMainResponse = await getAboutCompanyMain(locale ?? "ru");
    aboutCompanyMainData = aboutCompanyMainResponse?.data?.data;

    const aboutCompanyDigitsResponse = await getAboutCompanyDigits(
      locale ?? "ru"
    );
    aboutCompanyDigitsData = aboutCompanyDigitsResponse?.data?.data;

    const aboutCompanySolutionsResponse = await getAboutCompanySolutions(
      locale ?? "ru"
    );
    aboutCompanySolutionsData = aboutCompanySolutionsResponse?.data?.data;

    const messages = (
      await import(`../public/locales/${locale}/translation.json`)
    ).default;

    return {
      props: {
        aboutCompanyMainData,
        aboutCompanyDigitsData,
        aboutCompanySolutionsData,
        messages,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

const About = ({
  aboutCompanyMainData,
  aboutCompanyDigitsData,
  aboutCompanySolutionsData,
}: {
  aboutCompanyMainData: AboutCompanyMain;
  aboutCompanyDigitsData: AboutCompanyDigit[];
  aboutCompanySolutionsData: AboutCompanySolution[];
}) => {
  return (
    <>
      <Wrapper>
        <AboutHeroSection data={aboutCompanyMainData} />
        <AboutDigitsSection data={aboutCompanyDigitsData} />
        <SolutionsSection data={aboutCompanySolutionsData} />
      </Wrapper>
    </>
  );
};

export default About;
