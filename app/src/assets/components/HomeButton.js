import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/home">
      <button className="bg-curry py-5 px-10 uppercase rounded-full semibold">
        Start training
      </button>
    </Link>
  );
};

export default HomeButton;
