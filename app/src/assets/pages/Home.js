import React from "react";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
/* import Classes, { Carouselle } from "../components/Classes"; */

const Home = () => {
  const [classes, setClasses] = useState([]);
  const [number, setNumber] = useState(0);

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
    let rng = Math.floor(Math.random() * classes.length);
    setNumber(rng);
  });

  return (
    <div className="margin">
      {/*   <div className="flex justify-between items-center mb-3"></div> */}

      <div className="w-full h-[450px]">
        <div
          className="h-full w-full relative rounded-[25px] overflow-hidden"
          style={{
            backgroundImage: `url(${classes[number]?.asset?.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-curry absolute bottom-0 p-4 w-2/3 rounded-tr-[40px]">
            <div className="flex flex-col gap-2">
              <p className="semibold text-medium truncate">
                {classes[number]?.className}
              </p>
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
      </div>

      <section>
        <h2 className="bold text-big mb-4 mt-10">Classes for you</h2>
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
                  <p className="truncate semibold text-smallMedium">
                    {item.className}
                  </p>
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
      {/*       <Classes /> */}
    </div>
  );
};

export default Home;
