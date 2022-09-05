import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";

const Search = () => {
  const [classes, setClasses] = useState([]);
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:4000/api/v1/classes", { method: "GET" })
        .then((res) => res.json())
        .then((res) => {
          setClasses(res);
          // console.log(res);
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
    <div className="margin w-screen">
      <Searchbar />

      <section>
        <h2 className="bold text-big mb-4 mt-10">Popular classes</h2>
        <div className="flex gap-5 overflow-x-scroll overflow-hidden">
          {classes?.map((item) => (
            <div>
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
                  <div className="flex gap-1">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="bold text-big mb-4 mt-10">Popular Trainers</h2>
        {trainers?.map((trainer) => (
          <div>
            <div className="w-[100px] h-[100px]">
              <img src={trainer.asset.url} />
            </div>
            <p className="bold">{trainer.trainerName}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Search;
