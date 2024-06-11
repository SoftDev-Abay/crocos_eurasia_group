import React from "react";
import Link from "next/link";
import "./style.scss";
import Button from "@/app/components/Button/Button";
import ArrowOutwardIcon from "@/app/icons/ArrowOutwardIcon";
import { useRouter } from "next/router";
const RootModalContent = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <div className="root-modal-content">
      <nav>
        <Link href="/" className={isActive("/") ? "active" : ""}>
          <span>О компании</span>
        </Link>
        <Link href="/goal" className={isActive("/goal") ? "active" : ""}>
          <span>Наша миссия</span>
        </Link>
        <Link href="/news" className={isActive("/news") ? "active" : ""}>
          <span>Что нового</span>
        </Link>
      </nav>
      <div className="root-modal-content__btn__wrapper">
        <Link href={"/contact-us"}>
          <Button
            className="btn-content"
            onClick={() => console.log("Button clicked")}
          >
            <span>Связаться с нами</span>
            <ArrowOutwardIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RootModalContent;
