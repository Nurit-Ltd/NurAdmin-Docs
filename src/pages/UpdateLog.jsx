import { Link } from "react-router-dom";
import FooterAllPage from "../components/shared/Footer/FooterAllPage";
import TitleHeading from "../components/shared/TitleHeading";
import { updateAndLog } from "../data/updateAndLog";

const UpdateLog = () => {
  return (
    <>
      <TitleHeading
        emoji="☑️"
        description="Update logs of NurAdmin"
        title="Update Logs"
      />
      <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px]">
        <div className="container_fluid">
          <div className="mt-20 pb-25 flex flex-wrap gap-4">
            {updateAndLog.map((language) => (
              <div
                key={language.id}
                className="w-[217px] h-[122px] border p-4 footer_bar duration-200"
              >
                <Link
                  to={language.link}
                  className="hover:text-headingText hover:underline-offset-4 hover:underline duration-200  text-blueActive font-bold focus:text-blueActive"
                >
                  {language.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="pb-10">
            <FooterAllPage
              title1="Credits and Resources"
              title2="HTML"
              link1="/credit-resources"
              link2="/update-log/html"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateLog;
