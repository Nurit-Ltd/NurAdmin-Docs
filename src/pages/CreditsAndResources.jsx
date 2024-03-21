import CreditsSide from "../components/screen/CreditsAndRes/CreditsSide";
import FooterAllPage from "../components/shared/Footer/FooterAllPage";
import TitleHeading from "../components/shared/TitleHeading";

const CreditsAndResources = () => {
  return (
    <>
      <TitleHeading
        emoji="✨"
        title="Credits and Resources"
        description="All assets that are used to build NurAdmin are 100% free, MIT licensed, and Open-source our in-house tools to make it easier for us and users to avoid licensing issues.
          "
      />
      <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px] relative">
        <div className="container_fluid">
          <CreditsSide />
          <div className="pb-10">
            <FooterAllPage
              title1="Customization"
              title2="Update Logs"
              link1="/customization"
              link2="/update-log"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditsAndResources;
