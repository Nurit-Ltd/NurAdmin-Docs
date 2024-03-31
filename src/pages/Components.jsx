import { Link } from "react-router-dom";
import FooterAllPage from "../components/shared/Footer/FooterAllPage";
import TitleHeading from "../components/shared/TitleHeading";
import { components } from "../data/components";

const Components = () => {
  return (
    <>
      <TitleHeading emoji="🥞" title="Components" />
      <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px]">
        <div className="container_fluid">
          <div className="mt-20 space-y-9" data-aos="zoom-in">
            {components.map((language) => (
              <Link
                to={language.link}
                key={language.id}
                className="w-full h-[66px] flex items-center border p-4  text-headingText hover:text-blueActive focus:text-blueActive footer_bar duration-200"
              >
                <div className="flex items-center gap-5">
                  <div className="text-[32px]">{language.img}</div>
                  <h4 className="font-medium">{language.title}</h4>
                </div>
              </Link>
            ))}
          </div>
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

export default Components;
