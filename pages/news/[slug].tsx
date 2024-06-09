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
            <h1>{record.title}</h1>
            <img src={record.image} alt={record.title ? record.title : ""} />
            {record.description && (
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(record.description),
                }}
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
