import React from "react";
import "./style.scss";
import Image from "next/image";
import MenuIcon from "../../icons/MenuIcon";
import LanguageToggleButton from "@/app/components/LanguageToggle/LanguageToggleButton";
import Modal from "@/app/components/Modal/Modal";
import RootModalContent from "./RootModalContent";
import Button from "@/app/components/Button/Button";
import ArrowLeftIcon from "@/app/icons/ArrowLeftIcon";
import { useTranslations } from "next-intl";
const ContactNavbar = () => {
  const [isShow, setIsShow] = React.useState(false);

  const handleClose = () => {
    setIsShow(false);
  };

  const handleOpen = () => {
    setIsShow(true);
  };

  const t = useTranslations();

  return (
    <>
      <div className="navbar">
        <div className="navbar-first-part">
          <div style={{ cursor: "pointer" }} onClick={handleOpen}>
            <MenuIcon />
          </div>
          <div className="logo">
            <Image
              src="/imgs/logo.png"
              alt="Logo"
              priority
              width="153"
              height="34"
            />
          </div>
        </div>

        <div className="navbar-second-part">
          <Button className="button-content">
            <ArrowLeftIcon width={12} height={12} fill="#FFFFFFBD" />
            <span>{t("wrapper.navbar.go_back_button")}</span>
          </Button>
          <LanguageToggleButton />
        </div>
      </div>
      <Modal isShow={isShow} handleClose={handleClose}>
        <RootModalContent />
      </Modal>
    </>
  );
};

export default ContactNavbar;
