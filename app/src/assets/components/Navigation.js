import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute z-50">
      <button onClick={() => navigate("/home")}>
        <AiOutlineArrowLeft />
      </button>
    </div>
  );
};

export default Navigation;
