import { MissionsMain, MissionsValue } from "../constants/MissionsTypes";

import http from "../utils/http";

export const getMissionsMain = async () => {
  try {
    const response = await http.get("/our-missions/main");
    return response.data.data as MissionsMain;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMissionsValues = async () => {
  try {
    const response = await http.get("/our-missions/values");
    return response.data.data as MissionsValue[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
