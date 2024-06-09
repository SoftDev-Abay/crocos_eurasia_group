import React from "react";
import { WhatsNewRecord } from "@/app/constants/WhatsNewRecordTypes";
import "./style.scss";
import DOMPurify from "dompurify";
import { extractTextFromDescription } from "@/app/utils/helpers";
import Link from "next/link";

const RecordCard = ({
  title,
  image,
  description,
  created_at,
  id,
}: WhatsNewRecord) => {
  const sanitizedDescriptionHTML = DOMPurify.sanitize(
    description ? description : ""
  );

  const descriptionText = extractTextFromDescription(sanitizedDescriptionHTML);

  const shortDescription = descriptionText.slice(0, 167) + "...";

  return (
    <div className="record-card">
      <img
        className="record-card__image"
        src={image}
        alt={title ? title : "Record image"}
      />
      <Link href={`/news/${id}`}>
        <h2 className="record-card__title">{title}</h2>
      </Link>

      <div
        className="record-card__description"
        dangerouslySetInnerHTML={{ __html: shortDescription }}
      />
      <p className="record-card__date">{created_at}</p>
    </div>
  );
};

export default RecordCard;
