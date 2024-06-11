import http from "../utils/http";

export const getAboutCompanyMain = (Language: string) => {
  return http.get("/about-companies/main", {
    headers: { "Accept-Language": Language },
  });
};

export const getAboutCompanyDigits = (Language: string) => {
  return http.get("/about-companies/digits", {
    headers: { "Accept-Language": Language },
  });
};

export const getAboutCompanySolutions = (Language: string) => {
  return http.get("/about-companies/unique-solutions", {
    headers: { "Accept-Language": Language },
  });
};
