import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40, x: -170 };
  const animateTo = { opacity: 1, y: 0, x: -170 };
  return (
    <ul className="absolute text-center z-50 m-auto">
      <Link to="/home">
        <motion.li
          title="Popular classes"
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
          onClick={() => props.isMenuOpen && props.closeMenu()}
        >
          Home
        </motion.li>
      </Link>
      <Link to="/search">
        <motion.li
          title="Search"
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.1 }}
          onClick={() => props.isMenuOpen && props.closeMenu()}
        >
          Search
        </motion.li>
      </Link>
      <Link to="/schedule">
        <motion.li
          title="My schedule"
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={() => props.isMenuOpen && props.closeMenu()}
        >
          My Schedule
        </motion.li>
      </Link>
      <Link to="">
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          onClick={() => props.isMenuOpen && props.closeMenu()}
        >
          Log out
        </motion.li>
      </Link>
    </ul>
  );
};

export default NavLinks;
