import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/home")}>
        <AiOutlineArrowLeft />
      </button>
    </div>
  );
};

export default Navigation;
