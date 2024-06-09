import React from "react";
import "./style.scss";
import Image from "next/image";
import MenuIcon from "../../icons/MenuIcon";
import LanguageToggleButton from "@/app/components/LanguageToggle/LanguageToggleButton";
import Modal from "@/app/components/Modal/Modal";
import RootModalContent from "./RootModalContent";
const Navbar = () => {
  const [isShow, setIsShow] = React.useState(false);

  const handleClose = () => {
    setIsShow(false);
  };

  const handleOpen = () => {
    setIsShow(true);
  };

  return (
    <>
      <div className="navbar">
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

        <div>
          <LanguageToggleButton />
        </div>
      </div>
      <Modal isShow={isShow} handleClose={handleClose}>
        <RootModalContent />
      </Modal>
    </>
  );
};

export default Navbar;
