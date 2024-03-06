
import UseFullLInk from "../components/screen/UseFullLinks/UseFullLInk";
import FooterAllPage from "../components/shared/Footer/FooterAllPage";
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
            <FooterAllPage
              title1="Installation"
              title2="HTML Components"
              link1="/installation"
              link2="/components/html-components"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UseFullLinks;
