import React from "react";
import { IconProps } from "../constants/IconTypes";

const InstagramIcon = ({
  className = "",
  width = 32,
  height = 32,
  fill = "#0A2910",
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
      <g clipPath="url(#clip0_209_495)">
        <path
          d="M7.13779 13.9999C7.09143 13.9999 7.04507 13.9999 6.9984 13.9997C5.90102 14.0025 4.88706 13.9745 3.90097 13.9145C2.99692 13.8595 2.17169 13.5471 1.51437 13.0111C0.880128 12.494 0.447006 11.7947 0.227082 10.9329C0.035675 10.1826 0.025528 9.44616 0.0158081 8.73383C0.00875849 8.22274 0.00149536 7.61712 0 7.00124C0.00149536 6.3828 0.00875849 5.77718 0.0158081 5.26609C0.025528 4.55387 0.035675 3.81741 0.227082 3.06705C0.447006 2.2053 0.880128 1.50601 1.51437 0.988822C2.17169 0.452842 2.99692 0.140418 3.90107 0.08541C4.88716 0.0254887 5.90133 -0.00249595 7.00107 0.000174348C8.09877 -0.0021755 9.11242 0.0254887 10.0985 0.08541C11.0025 0.140418 11.8278 0.452842 12.4851 0.988822C13.1195 1.50601 13.5524 2.2053 13.7724 3.06705C13.9638 3.8173 13.9739 4.55387 13.9836 5.26609C13.9907 5.77718 13.9981 6.3828 13.9995 6.99868V7.00124C13.9981 7.61712 13.9907 8.22274 13.9836 8.73383C13.9739 9.44607 13.9639 10.1826 13.7724 10.9329C13.5524 11.7947 13.1195 12.494 12.4851 13.0111C11.8278 13.5471 11.0025 13.8595 10.0985 13.9145C9.15416 13.972 8.18411 13.9999 7.13779 13.9999ZM6.9984 12.906C8.07794 12.9085 9.06911 12.8813 10.0321 12.8228C10.7157 12.7812 11.3083 12.5594 11.794 12.1635C12.2427 11.7974 12.5519 11.2924 12.7126 10.6624C12.872 10.0379 12.8811 9.36732 12.89 8.71888C12.897 8.2112 12.9042 7.60986 12.9057 6.99997C12.9042 6.38996 12.897 5.78872 12.89 5.28105C12.8811 4.63259 12.872 3.96203 12.7126 3.33739C12.5519 2.70742 12.2427 2.20241 11.794 1.83637C11.3083 1.44053 10.7157 1.21868 10.0321 1.17713C9.06911 1.11849 8.07794 1.09147 7.00096 1.09382C5.92163 1.09126 4.93031 1.11849 3.96741 1.17713C3.28381 1.21868 2.69111 1.44053 2.20555 1.83637C1.75673 2.20241 1.44762 2.70742 1.28686 3.33739C1.1275 3.96203 1.11832 4.63249 1.10945 5.28105C1.10251 5.78915 1.09525 6.39082 1.09375 7.00124C1.09525 7.609 1.10251 8.21078 1.10945 8.71888C1.11832 9.36732 1.1275 10.0379 1.28686 10.6624C1.44762 11.2924 1.75673 11.7974 2.20555 12.1635C2.69111 12.5593 3.28381 12.7811 3.96741 12.8227C4.93031 12.8813 5.92184 12.9087 6.9984 12.906ZM6.97233 10.4179C5.08776 10.4179 3.55436 8.88467 3.55436 6.99997C3.55436 5.11527 5.08776 3.58199 6.97233 3.58199C8.85701 3.58199 10.3903 5.11527 10.3903 6.99997C10.3903 8.88467 8.85701 10.4179 6.97233 10.4179ZM6.97233 4.67575C5.69081 4.67575 4.64811 5.71844 4.64811 6.99997C4.64811 8.28149 5.69081 9.32419 6.97233 9.32419C8.25397 9.32419 9.29653 8.28149 9.29653 6.99997C9.29653 5.71844 8.25397 4.67575 6.97233 4.67575ZM10.7731 2.48824C10.3201 2.48824 9.95278 2.85546 9.95278 3.30855C9.95278 3.76165 10.3201 4.12887 10.7731 4.12887C11.2263 4.12887 11.5934 3.76165 11.5934 3.30855C11.5934 2.85546 11.2263 2.48824 10.7731 2.48824Z"
          fill={fill}
          fillOpacity="0.74"
        />
      </g>
      <defs>
        <clipPath id="clip0_209_495">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default InstagramIcon;
