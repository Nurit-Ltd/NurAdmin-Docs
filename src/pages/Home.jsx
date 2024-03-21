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
      <TitleHeading
        emoji="👋"
        title="Introduction"
        description="Welcome to the documentation for NurAdmin, This documentation
            covers all the essential aspects of using NurAdmin, from
            installation and usage to customization and exploring features."
      />
      <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px] pb-10">
        <div className="container_fluid">
          <AdminCard />
          <HomeFooter />
        </div>
      </div>
    </div>
  );
};

export default Home;
