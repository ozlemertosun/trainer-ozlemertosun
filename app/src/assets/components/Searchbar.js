import Fuse from "fuse.js";
import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const Searchbar = () => {
  const [classes, setClasses] = useState([]);
  const [query, setQuery] = useState("");
  //const [showResults, setShowResults] = useState(false);
  //const onClick = () => setShowResults(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:4000/api/v1/classes", { method: "GET" })
        .then((res) => res.json())
        .then((res) => {
          setClasses(res);
          //console.log(res);
        });
    };
    fetchData();
  }, []);

  const fuse = new Fuse(classes, {
    keys: [
      "classDay",
      "classDescription",
      "className",
      "trainer.trainerName",
      "id",
    ],
    includeScore: true,
  });

  const results = fuse.search(query);
  const classResults = query ? results.map((result) => result.item) : classes;
  const [visible, setVisible] = useState(false);

  function handleOnSearch({ currentTarget = {} }) {
    const { value } = currentTarget;
    setQuery(value);
    if (value === "") {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }
  return (
    <div className="">
      <div className="m-auto mt-10 relative">
        <form className="search">
          <div className="flex items-center relative">
            <AiOutlineSearch className="text-gray-500 text-xl absolute ml-6" />
            {/*     {classResults.length === 0 ? (
              <AiOutlineSearch className="text-gray-500 text-xl absolute ml-6" />
            ) : (
              <AiOutlineClose className="text-gray-500 text-xl absolute ml-6" />
            )} */}
            <input
              className="w-full border-darkGray border-solid border-[1px] p-4 rounded-full pl-14 ring-0 focus:border-curry outline-none bg-lightGray"
              type="text"
              value={query}
              onChange={handleOnSearch}
              placeholder={"Search classes"}
              /*  pattern={"[a-z]{3}"} */
            />
            <span className="validity"></span>
          </div>
        </form>

        {visible && (
          <ul className="dataResult absolute bg-sky flex flex-col gap-5 w-full mt-4 pb-10">
            {classResults.slice(0.2).map((item) => {
              const { classDay, classDescription, className, id } = item;
              return (
                <a key={id} href="">
                  <li className="character">
                    <ul className=" w-full border-solid border-[1px] rounded-[50px] p-8 border-darkGray bg-lightGray hover:bg-curry">
                      <li>{classDay}</li>
                      <li className="truncate">{classDescription}</li>
                      <li>{className}</li>
                    </ul>
                  </li>
                </a>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
