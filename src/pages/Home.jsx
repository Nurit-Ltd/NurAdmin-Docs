import heroImage from "../assets/image/intro/heroIntro.svg";

const Home = () => {
  return (
    <div>
       <div className="w-full h-[240px]">
          <img src={heroImage} alt="heroImage" className="w-full h-full object-fill" />
       </div>
    </div>
  );
};

export default Home;