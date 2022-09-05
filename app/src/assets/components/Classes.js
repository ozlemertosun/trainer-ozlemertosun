import React from "react";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

export const Carouselle = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <img src={item.asset.url} />
      ))}
    </div>
  );
};

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/classes", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setClasses(res);
        /*   console.log(res); */
      });
  }, []);

  return (
    <div>
      <img src={classes[2]?.asset.url} alt="" />

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

      {/*  <Carouselle data={classes} /> */}
    </div>
  );
};

export default Classes;
