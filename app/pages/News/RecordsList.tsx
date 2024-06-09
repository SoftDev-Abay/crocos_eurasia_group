import React from "react";
import { WhatsNewRecord } from "@/app/constants/WhatsNewRecordTypes";
import RecordCard from "./RecordCard";
import "./style.scss";

const RecordsList = ({ records }: { records: WhatsNewRecord[] }) => {
  return (
    <div className="records-container">
      {records.map((record) => (
        <RecordCard key={record.id} {...record} />
      ))}
    </div>
  );
};

export default RecordsList;
