import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Navbar from "./Navbar";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="z-50 flex justify-between items-center relative mt-10">
      <button
        onClick={() => navigate("/home")}
        className="absolute left-6 text-big text-darkGray"
      >
        <AiOutlineArrowLeft />
      </button>
      <h1 className="flex-grow">{/* {`${}`} */}</h1>
      <Navbar className="" />
    </div>
  );
};

export default Navigation;
