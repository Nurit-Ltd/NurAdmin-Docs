
import CreditsSide from "../components/screen/CreditsAndRes/CreditsSide";
import FooterAllPage from "../components/shared/Footer/FooterAllPage";
import TitleHeading from "../components/shared/TitleHeading";


const CreditsAndResources = () => {
  
  return (
    <>
      <TitleHeading
        emoji="✨"
        title="Credits and Resources"
        description="All assets that are used to build TailAdmin are 100% free, MIT licensed, and Open-source our in-house tools to make it easier for us and users to avoid licensing issues.
          "
      />
      <div className="w-[828px] relative">
        <div className="container_fluid">
              <CreditsSide />
          <div className="pb-10">
            <FooterAllPage
              title1="Introduction"
              title2="Components"
              link1="/"
              link2="/components"
            />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default CreditsAndResources;
