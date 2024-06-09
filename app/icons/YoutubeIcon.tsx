import React from "react";
import { IconProps } from "../constants/IconTypes";

const YoutubeIcon = ({
  className = "",
  width = 32,
  height = 32,
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2862 3.7192C13.135 3.15692 12.6916 2.71368 12.1294 2.56227C11.1024 2.28125 6.99398 2.28125 6.99398 2.28125C6.99398 2.28125 2.88577 2.28125 1.8587 2.55162C1.30731 2.70286 0.853172 3.157 0.701926 3.7192C0.431641 4.7462 0.431641 6.87604 0.431641 6.87604C0.431641 6.87604 0.431641 9.01663 0.701926 10.0329C0.853332 10.595 1.29649 11.0383 1.85878 11.1897C2.89658 11.4708 6.99414 11.4708 6.99414 11.4708C6.99414 11.4708 11.1024 11.4708 12.1294 11.2005C12.6917 11.0492 13.135 10.6059 13.2864 10.0437C13.5566 9.01663 13.5566 6.88686 13.5566 6.88686C13.5566 6.88686 13.5674 4.7462 13.2862 3.7192ZM5.68597 8.84365V4.90841L9.10229 6.87604L5.68597 8.84365Z"
        fill="#0A2910"
        fill-opacity="0.74"
      />
    </svg>
  );
};

export default YoutubeIcon;
