import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Stars from "../components/Stars";

const ClassDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [trainerData, setTrainerData] = useState([]);
  const [trainerImg, setTrainerImg] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/classes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });

    fetch(`http://localhost:4000/api/v1/trainers`)
      .then((res) => res.json())
      .then((data) => {
        setTrainerData(data);
      });
  }, []);

  useEffect(() => {
    trainerData.filter((trainer) => {
      if (trainer?.trainerName === details?.trainer?.trainerName) {
        setTrainerImg(trainer.asset.url);
      }
    });
  }, [trainerData]);

  return (
    <div className="h-screen w-screen">
      <div className="h-1/2 w-full top-0 z-0 relative">
        <div
          className="h-[50vh] w-screen "
          style={{
            backgroundImage: `url(${details?.asset?.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0  bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative top-1/2 mx-6">
            <h2 className="text-curry break-words text-bigger font-bold leading-none tracking-tighter">
              {details?.className}
            </h2>
            <div className="flex justify-between items-center mt-10">
              <div className="flex gap-2 items-center text-curry text-medium">
                <Stars /> <p className="font-bold">5/5</p>
              </div>
              <button className="border-2 rounded-full border-solid px-8 py-3 border-curry text-curry font-bold uppercase">
                Rate
              </button>
            </div>
          </div>
        </div>
        <div className="mx-6 mt-10">
          <p className="font-bold text-smallMedium">
            {details?.classDay} - {details?.classTime}
          </p>
          <p className="mt-3 mb-8">{details?.classDescription}</p>
          <div>
            <h2 className="font-bold text-big">Trainer</h2>
            <div className="flex gap-6 mt-2">
              <div
                style={{
                  backgroundImage: `url(${trainerImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                }}
                className="w-[100px] h-[100px] rounded-xl"
              ></div>
              <p className="font-semibold text-medium mt-4">
                {details?.trainer?.trainerName}
              </p>
            </div>
            <Link to="/login">
              <button className="w-full py-4 rounded-full bg-curry uppercase font-semibold mt-5">
                sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
