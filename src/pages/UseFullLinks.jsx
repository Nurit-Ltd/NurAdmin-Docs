
import UseFullLInk from "../components/screen/UseFullLinks/UseFullLInk";
import FooterLastPage from "../components/shared/Footer/FooterLastPage";
import TitleHeading from "../components/shared/TitleHeading";


const UseFullLinks = () => {
  return (
    <>
      <TitleHeading
        emoji="🔗"
        title="Useful Links"
      />
      <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px]">
        <div className="container_fluid">
             <UseFullLInk />
          <div className="pb-10">
            <FooterLastPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default UseFullLinks;
