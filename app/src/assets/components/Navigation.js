import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";

const Navigation = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname.substring(1);

  return (
    <>
      <div className="z-50 text-darkGray p-5 text-bigger flex justify-between items-center fixed  left-0 right-0 top-0">
        <button onClick={() => navigate("/home")} className="text-big">
          {location.pathname !== "/home" && <AiOutlineArrowLeft />}
        </button>
        <h1 className="flex-grow capitalize ml-4 text-licorice text-big">
          {path === "home"
            ? "Popular classes"
            : path === "schedule"
            ? "My " + path
            : location.pathname === "/search"
            ? "search"
            : path === path.substring("class")
            ? ""
            : path}
        </h1>
        <div></div>
        <motion.button
          animate={{ rotate: open ? 90 : 0 }}
          onClick={() => setOpen(!open)}
        >
          {!open ? <HiOutlineMenuAlt3 /> : <AiOutlineClose />}
        </motion.button>
      </div>
      <AnimatePresence>
        {open && <Overlay open={open} setOpen={setOpen} />}
      </AnimatePresence>
    </>
  );
};

const Overlay = ({ open, setOpen }) => {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5 }}
      className="z-40 fixed inset-0 bg-sky flex justify-center items-center"
    >
      <ul className="flex flex-col gap-10 text-bigger text-center">
        <NavLinks open={open} setOpen={setOpen} />
      </ul>
    </motion.div>
  );
};

export default Navigation;
