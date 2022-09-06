import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavLinks = ({ open, setOpen }) => {
  return (
    <>
      <Link to="/home">
        <motion.li title="Popular classes" onClick={() => setOpen(!open)}>
          Home
        </motion.li>
      </Link>
      <Link to="/search">
        <motion.li title="Search" onClick={() => setOpen(!open)}>
          Search
        </motion.li>
      </Link>
      <Link to="/schedule">
        <motion.li title="My schedule" onClick={() => setOpen(!open)}>
          My Schedule
        </motion.li>
      </Link>
      <Link to="/login">
        <motion.li onClick={() => setOpen(!open)}>Log out</motion.li>
      </Link>
    </>
  );
};

export default NavLinks;
