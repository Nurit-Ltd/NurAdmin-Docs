// import adminPic from "../assets/image/intro/adminImage.png";
import heroImage from "../assets/image/intro/heroIntro.svg";
import TitleHeading from "../components/shared/TitleHeading";

const Home = () => {
  return (
    <div>
      <div className="w-full h-[240px]">
        <img
          src={heroImage}
          alt="heroImage"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
         <TitleHeading />
      </div>
    </div>
  );
};

export default Home;
