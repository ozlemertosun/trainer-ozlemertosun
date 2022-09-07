import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import Stars from "../components/Stars";

const Search = () => {
  const [classes, setClasses] = useState([]);
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:4000/api/v1/classes", { method: "GET" })
        .then((res) => res.json())
        .then((res) => {
          setClasses(res);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/trainers", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setTrainers(res);
        console.log(res);
      });
  }, []);

  return (
    <div className="margin">
      <div className="z-30 relative">
        <Searchbar />
      </div>
      <section>
        <h2 className="bold text-big mb-4 mt-6">Popular classes</h2>
        <div className="flex gap-5 overflow-x-scroll overflow-hidden z-0">
          {classes?.map((item, index) => (
            <Link to={`/class/${item.id}`} key={index}>
              <div
                className=" rounded-[25px] rounded-br-none overflow-hidden w-[150px] h-[170px] relative"
                style={{
                  backgroundImage: `url(${item.asset.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-curry absolute z-10 w-full bottom-0 p-4 rounded-tr-[40px]  flex flex-col gap-1">
                  <p className="truncate">{item.className}</p>
                  <Stars />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="bold text-big mb-4 mt-10">Popular Trainers</h2>
        <article className="flex flex-col gap-4">
          {trainers?.map((trainer, index) => (
            <div key={index} className="flex fl gap-6">
              <div
                className="h-[100px] w-[100px] rounded-2xl"
                style={{
                  backgroundImage: `url(${trainer.asset.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <p className="bold mt-6">{trainer.trainerName}</p>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};

export default Search;
