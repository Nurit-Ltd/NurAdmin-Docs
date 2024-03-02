// import adminPic from "../assets/image/intro/adminImage.png";
import heroImage from "../assets/image/intro/heroIntro.svg";
import AdminCard from "../components/screen/Home/AdminCard";
import HomeFooter from "../components/shared/Footer/HomeFooter";
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
      <div className="max-w-[828px] pb-10">
        <TitleHeading />
        <AdminCard />
        <HomeFooter />
      </div>
    </div>
  );
};

export default Home;
