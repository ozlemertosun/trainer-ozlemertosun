import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const burgericon = (
    <HiOutlineMenuAlt3
      className="text-bigger text-darkGray"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <AiOutlineClose
      className="text-bigger text-darkGray"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMenu = () => setOpen(false);
  return (
    <nav className="absolute right-6">
      {open ? closeIcon : burgericon}
      {open && <NavLinks isMenuOpen={true} closeMenu={closeMenu} />}
    </nav>
  );
};

export default Navbar;
