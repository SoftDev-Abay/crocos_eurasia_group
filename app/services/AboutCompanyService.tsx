import http from "../utils/http";

import {
  AboutCompanyMain,
  AboutCompanyDigit,
  AboutCompanySolution,
} from "../constants/AboutTypes";

export const getAboutCompanyMain = async () => {
  try {
    const response = await http.get("/about-companies/main");
    return response.data.data as AboutCompanyMain;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAboutCompanyDigits = async () => {
  try {
    const response = await http.get("/about-companies/digits");
    return response.data.data as AboutCompanyDigit[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAboutCompanySolutions = async () => {
  try {
    const response = await http.get("/about-companies/unique-solutions");
    return response.data.data as AboutCompanySolution[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
