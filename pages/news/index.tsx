import React from "react";
import NewsHeader from "@/app/pages/News/NewsHeader";
import RecordsList from "@/app/pages/News/RecordsList";
import CustomPagination from "@/app/components/Pagination/CustomPagination";
import { WhatsNewRecord } from "@/app/constants/WhatsNewRecordTypes";
import { getWhatsNewRecords } from "@/app/services/WhatsNewRecordsService";
import Filters from "@/app/pages/News/Filters";
import "./style.scss";
import Wrapper from "@/app/pages/Wrapper/Wrapper";
import { GetServerSideProps } from "next";

// Component now accepts props
const PostsPage = ({
  records,
  totalPages,
}: {
  records: WhatsNewRecord[];
  totalPages: number;
}) => {
  return (
    <Wrapper>
      <div className="news-wrapper">
        <NewsHeader />
        <Filters />
        <RecordsList records={records} />
        <CustomPagination totalPages={totalPages} />
      </div>
    </Wrapper>
  );
};

// Implement getServerSideProps to fetch data based on the page number
export const getServerSideProps: GetServerSideProps<{
  records: WhatsNewRecord[];
  totalPages: number;
}> = async (context) => {
  const page = Number(context.query.page) || 1; // Get page number from query
  const locale = context.locale || "ru"; // Get locale from context

  try {
    const response = await getWhatsNewRecords(page, locale); // Fetch records using the service

    const messages = (
      await import(`../../public/locales/${locale}/translation.json`)
    ).default;

    return {
      props: {
        records: response.data, // Assuming this is the correct data structure
        totalPages: response.meta.last_page, // Assuming meta contains pagination info
        messages,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      props: {
        records: [],
        totalPages: 0,
      },
    };
  }
};

export default PostsPage;
