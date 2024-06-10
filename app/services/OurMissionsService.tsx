import { MissionsMain, MissionsValue } from "../constants/MissionsTypes";

import http from "../utils/http";

export const getMissionsMain = (Language: string) => {
  return http.get("/our-missions/main", {
    headers: { "Accept-Language": Language },
  });

  // try {
  //   const response = await http.get("/our-missions/main");
  //   console.log(response.data.data);

  //   return response.data.data as MissionsMain;
  // } catch (error) {
  //   console.error("err", error);
  //   throw error;
  // }
};

export const getMissionsValues = (Language: string) => {
  return http.get("/our-missions/values", {
    headers: { "Accept-Language": Language },
  });

  // try {
  //   const response = await http.get("/our-missions/values");
  //   console.log(response.data.data);
  //   return response.data.data as MissionsValue[];
  // } catch (error) {
  //   console.error(error);
  //   throw error;
  // }
};
