import "./Home.css";
import heroPng from "./../../../../public/Hero.png";
import ButtonFill from "../../../Shared/Button/ButtonFill";
const Banner = () => {
  return (
    <div className="max-w-[1440px] relative mx-auto flex items-center justify-between h-1/2 lg:h-[700px]">
      <div className="lg:w-1/2 mx-auto absolute translate-x-1/2 right-1/2 lg:translate-x-0 lg:right-0 -z-50 opacity-50 lg:opacity-100 lg:relative pl-12 shadow-[#444e59] drop-shadow-2xl blur-sm lg:blur-0">
        <img src={heroPng} alt="" />
      </div>
      <div className="p-6 md:w-2/3 mx-auto lg:mx-0 lg:w-1/3">
        <div className=" text-center lg:text-right  ml-auto space-y-10">
          <h1 className="text-2xl lg:text-5xl font-semibold">
            Save Life Donate Blood
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ButtonFill text="Get Blood Now" size="3xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
