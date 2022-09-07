import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MyShedule = () => {
  const [userFetchData, setUserFetchData] = useState([]);
  const [userInfo, setUserInfo] = useState({ id: "", token: "" });

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const userToken = localStorage.getItem("token");
    setUserInfo({ id: userId, token: userToken });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/users/${userInfo.id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${userInfo.token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserFetchData(data);
        console.log(data);
      });
  }, [userInfo.id, userInfo.token]);

  return (
    <div className="margin">
      <ul className="">
        {userFetchData?.classes?.map((item) => (
          <Link to={"/class/" + item.id} key={item.id}>
            <li className="border-solid border-2 p-4 flex flex-col gap-4 rounded-xl bg-slate-50">
              <p className="font-bold">{item.className}</p>
              <p>
                {item.classDay} - {item.classTime}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MyShedule;
