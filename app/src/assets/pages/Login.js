import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "../Schema/Schema";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const [postedData, setPostedData] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const url = "http://localhost:4000/auth/token";
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        const { userId, token } = data;
        localStorage.setItem("userId", userId);
        localStorage.setItem("token", token);
      })
      .catch((err) => console.log(err));
    reset();
    setTimeout(() => navigate("/home"), 1500);

    console.log(postedData);
  };

  return (
    <div className="absolute">
      <div className="relative top-32">
        <h1 className="text-curry bold text-biggest leading-none tracking-tighter ml-9">
          Believe Yourself
        </h1>
        <div className="flex items-center gap-2">
          <hr className="h-[1px] border-none bg-licorice w-8" />
          <p className="text-licorice bold text-smallMedium">
            Train like a pro
          </p>
        </div>
      </div>

      <div className="relative top-28 margin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <legend className="font-semibold">
            Log in with your credentials
          </legend>
          <div className="flex flex-col gap-6 mt-3">
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="w-full border-darkGray border-solid border-[1px] p-4 rounded-full pl-8 ring-0 focus:border-curry outline-none bg-lightGray"
              {...register("username")}
            />

            <fieldset className="flex relative justify-end items-center">
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Enter your pasword"
                className="w-full border-darkGray border-solid border-[1px] p-4 rounded-full pl-8 ring-0 focus:border-curry outline-none bg-lightGray"
                {...register("password")}
              />
              <span onClick={togglePassword} className="absolute pr-6">
                {passwordShown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </fieldset>
          </div>
          <p className="error">{errors.username?.message}</p>
          <p className="error">{errors.password?.message}</p>
          <button
            type="submit"
            className="w-full p-4 rounded-full pl-8 ring-0 bg-curry uppercase mt-6"
          >
            log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
