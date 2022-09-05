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
  /*   function handleOnSearch({ currentTarget = {} }) {
      const { value } = currentTarget;
      setQuery(value);
    } */
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
    <div className="w-screen">
      <h1 className="text-red-400 font-extrabold text-5xl">Searchbar</h1>

      <div className="m-auto mt-10">
        <form className="w-full search">
          <div className="flex items-center relative">
            {classResults.length === 0 ? (
              <AiOutlineSearch className="text-gray-500 text-xl absolute ml-6" />
            ) : (
              <AiOutlineClose className="text-gray-500 text-xl absolute ml-6" />
            )}
            <input
              className="w-full border-gray-500 border-solid border-[1px] p-4 rounded-full pl-14 ring-0"
              type="text"
              value={query}
              onChange={handleOnSearch}
              /*   onClick={onClick} */
              placeholder={"Search classes"}
            />
          </div>
        </form>
        {/*    {showResults ? ( */}
        {visible && (
          <ul className="dataResult">
            {classResults.slice(0.2).map((item) => {
              const { classDay, classDescription, className, id } = item;
              return (
                <a key={id} href="">
                  <li className="character">
                    <ul className=" w-full border-solid border-[1px] rounded-full p-8">
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
        {/*       ) : null} */}
      </div>
    </div>
  );
};

export default Searchbar;
