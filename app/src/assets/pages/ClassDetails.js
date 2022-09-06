import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Stars from "../components/Stars";

const ClassDetails = () => {
  const [details, setDetails] = useState([]);

  const { id } = useParams();
  /* 
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:4000/api/v1/classes/${id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => {
          setDetails(res);
          console.log(res);
        });
    };
    fetchData();
  }, []);
 */
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
          className="h-[50vh] w-screen"
          style={{
            backgroundImage: `url(${details?.asset?.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
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
              <div className="w-[100px] h-[100px]">
                <img src={trainerImg} className="rounded-xl" />
              </div>
              <p className="font-semibold text-medium mt-4">
                {details?.trainer?.trainerName}
              </p>
            </div>
            <button className="w-full py-4 rounded-full bg-curry uppercase font-semibold mt-5">
              sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
