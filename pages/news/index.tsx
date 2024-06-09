import React from "react";
import NewsHeader from "@/app/pages/News/NewsHeader";
import RecordsList from "@/app/pages/News/RecordsList";
import CustomPagination from "@/app/components/Pagination/CustomPagination";
import { WhatsNewRecord } from "@/app/constants/WhatsNewRecordTypes";
import { getWhatsNewRecords } from "@/app/services/WhatsNewRecordsService";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Filters from "@/app/pages/News/Filters";
import "./style.scss";
import Wrapper from "@/app/pages/Wrapper/Wrapper";

const PostsPage = () => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams?.get("page")) || 1;

  const [records, setRecords] = useState<WhatsNewRecord[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  console.log("searchParams", searchParams);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await getWhatsNewRecords(currentPage);
        console.log("response", response.data);
        setTotalPages(response.meta.last_page);
        setRecords(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecords();
  }, [searchParams]);

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

export default PostsPage;
