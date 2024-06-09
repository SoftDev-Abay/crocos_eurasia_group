import http from "../utils/http";

import {
  WhatsNewRecord,
  WhatsNewRecordsResponse,
} from "../constants/WhatsNewRecordTypes";

export const getWhatsNewRecords = async (page: number) => {
  try {
    const response = await http.get(`/whats-new/records?page=${page}`);
    return response.data as WhatsNewRecordsResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getWhatsNewRecord = async (id: number) => {
  try {
    const response = await http.get(`/whats-new/records/${id}`);
    return response.data.data as WhatsNewRecord;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};
