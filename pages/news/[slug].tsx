import React, { useEffect, useState } from "react";
import Wrapper from "@/app/pages/Wrapper/Wrapper";
import { getWhatsNewRecord } from "@/app/services/WhatsNewRecordsService";
import { WhatsNewRecord } from "@/app/constants/WhatsNewRecordTypes";
import DOMPurify from "dompurify";
import "./style.scss";
interface PostDetailsProps {
  record: WhatsNewRecord;
}

const PostDetails = () => {
  const [record, setRecord] = useState<WhatsNewRecord | null>(null);

  useEffect(() => {
    getWhatsNewRecord(1)
      .then((data) => {
        console.log(data);
        setRecord(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Wrapper>
      {record ? (
        <div className="news-wrapper">
          <div className="container">
            <p className="date">{record.created_at}</p>
            <h1>{record.title}</h1>
            <img
              className="news_primary_image"
              src={record.image}
              alt={record.title ? record.title : ""}
            />
            {record.description && (
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(record.description),
                }}
                className="description"
              ></div>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};

export default PostDetails;
