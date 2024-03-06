
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
      <div className="w-[828px]">
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
