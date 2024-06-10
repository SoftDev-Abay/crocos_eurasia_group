import http from "../utils/http";

import {
  AboutCompanyMain,
  AboutCompanyDigit,
  AboutCompanySolution,
} from "../constants/AboutTypes";

export const getAboutCompanyMain = (Language: string) => {
  // try {
  //   const response = await http.get("/about-companies/main");
  //   return response.data.data as AboutCompanyMain;
  // } catch (error) {
  //   console.error(error);
  //   throw error;
  // }

  return http.get("/about-companies/main", {
    headers: { "Accept-Language": Language },
  });
};

export const getAboutCompanyDigits = (Language: string) => {
  // try {
  //   const response = await http.get("/about-companies/digits");
  //   return response.data.data as AboutCompanyDigit[];
  // } catch (error) {
  //   console.error(error);
  //   throw error;
  // }

  return http.get("/about-companies/digits", {
    headers: { "Accept-Language": Language },
  });
};

export const getAboutCompanySolutions = (Language: string) => {
  // try {
  //   const response = await http.get("/about-companies/unique-solutions");
  //   return response.data.data as AboutCompanySolution[];
  // } catch (error) {
  //   console.error(error);
  //   throw error;
  // }

  return http.get("/about-companies/unique-solutions", {
    headers: { "Accept-Language": Language },
  });
};
