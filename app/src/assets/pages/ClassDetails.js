import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/classes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setDetails(res);
        console.log(res);
      });
  }, []);

  return (
    <div>
      <div className="">
        <div
          className="h-1/2 w-full"
          style={{
            backgroundImage: `url(${details?.asset?.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div>
          <p>
            {details?.classDay} - {details?.classTime}
          </p>
          <p>{details?.classDescription}</p>
          <div>
            <h2>Trainer</h2>
            <div className="flex">
              <div>
                <img src="" alt="" />
              </div>
              <p>{details?.trainer?.trainerName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
