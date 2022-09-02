import HomeButton from "../components/HomeButton";
import background1 from "../img/welcome1.jpg";
import background2 from "../img/welcome2.jpg";

const Welcome = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background1})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
      className="h-screen bg-red-500 relative"
    >
      <div className="absolute top-44 z-50">
        <h1 className="text-curry bold text-biggest leading-none tracking-tighter ml-9">
          Believe Yourself
        </h1>
        <div className="flex items-center gap-2">
          <hr className="h-[1px] border-none bg-sky w-8" />
          <p className="text-sky bold text-smallMedium">Train like a pro</p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${background2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute h-1/2 w-full left-0 bottom-0 z-10"
      ></div>
      <div className="fixed bottom-8 flex justify-center w-full z-30 ">
        <HomeButton />
      </div>
    </div>
  );
};

export default Welcome;
