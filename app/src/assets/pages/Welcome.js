import HomeButton from "../components/HomeButton";
import background1 from "../img/welcome1.jpg";
import background2 from "../img/welcome2.jpg";

const Welcome = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <img src={background1} />
        </div>
        <div className="absolute top-24">
          <p className="text-curry bold text-xxl leading-none tracking-tighter ml-9">
            Believe Yourself
          </p>
          <div className="flex items-center gap-2">
            <hr className="h-[1px] border-none bg-sky w-8" />
            <p className="text-sky bold text-s">Train like a pro</p>
          </div>
        </div>
      </div>

      <div>
        <img src={background2} />
      </div>
      <div className="fixed bottom-8 flex justify-center w-full ">
        <HomeButton />
      </div>
    </div>
  );
};

export default Welcome;
