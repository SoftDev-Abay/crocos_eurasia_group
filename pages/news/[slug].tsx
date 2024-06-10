import React, { useEffect, useState } from "react";
import Wrapper from "@/app/pages/Wrapper/Wrapper";
import { getWhatsNewRecord } from "@/app/services/WhatsNewRecordsService";
import { WhatsNewRecord } from "@/app/constants/WhatsNewRecordTypes";
import DOMPurify from "dompurify";
import "./style.scss";
import HtmlRenderer from "@/app/components/HtmlRenderer/HtmlRenderer";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  let recordData;

  try {
    const { slug } = context.params as { slug: string };

    const response = await getWhatsNewRecord(
      Number(slug),
      context.locale ?? "en"
    );

    recordData = response?.data?.data;

    console.log("recordData", recordData);

    return {
      props: {
        record: recordData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      props: {
        record: null,
      },
    };
  }
};

const PostDetails = ({ record }: { record: WhatsNewRecord }) => {
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
              <HtmlRenderer
                unsafeHtml={record.description}
                className="description"
              />
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
