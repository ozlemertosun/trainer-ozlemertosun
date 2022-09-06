import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";

const Navigation = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="z-50 text-darkGray p-5 text-bigger flex justify-between items-center fixed  left-0 right-0 top-0">
        <button onClick={() => navigate("/home")} className="text-big">
          <AiOutlineArrowLeft />
        </button>
        <h1 className="flex-grow">{/* {`${}`} */}</h1>
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
