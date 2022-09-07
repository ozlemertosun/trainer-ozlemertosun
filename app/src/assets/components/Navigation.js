import { useLocation, useNavigate, useNavigationType } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect, useState } from "react";
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
  const navigate = useNavigate();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState("");
  useEffect(() => {
    setUserIsLoggedIn(localStorage.getItem("token"));
  }, []);

  function handleForm() {
    localStorage.clear();
    setUserIsLoggedIn("");
    setOpen(!open);
  }
  function handleLogin() {
    navigate("/login");
    setTimeout(() => setOpen(!open), 250);
  }
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
        {userIsLoggedIn ? (
          <button onClick={handleForm}>
            <motion.li>Log out</motion.li>
          </button>
        ) : (
          <button onClick={handleLogin}>
            <motion.li>Log in</motion.li>
          </button>
        )}
      </ul>
    </motion.div>
  );
};

export default Navigation;
