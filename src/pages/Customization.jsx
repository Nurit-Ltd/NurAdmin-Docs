import Color from "../components/screen/Customization/Color";
import DarkMode from "../components/screen/Customization/DarkMode";
import Screen from "../components/screen/Customization/Screen";
import Spacing from "../components/screen/Customization/Spacing";
import FooterAllPage from "../components/shared/Footer/FooterAllPage";
import TitleHeading from "../components/shared/TitleHeading";
import RightNavigation from "../components/shared/RightNavigation/RightNavigation";
import { customization_navigation } from "../data/navigation";

const Customization = () => {
  return (
    <>
      <div className="flex">
        <div>
          <TitleHeading
            emoji="💅"
            title="Customization"
            description="In this part of the documentation, we are going to show you how you can customize the tailwind.config.js file.
          "
          />
          <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px] relative">
            <div className="container_fluid">
              <div className="pt-9 text-headingText leading-6">
                <p>
                  You can add your personalized styling by customizing the
                  config file. You can customize things like{" "}
                  <span className="font-bold">Colors</span>,{" "}
                  <span className="font-bold">Screens</span>,{" "}
                  <span className="font-bold">Spacing</span>, and many more.
                </p>
              </div>
              <section id="section1">
                <Color />
              </section>
              <section id="section2">
                <DarkMode />
              </section>
              <section id="section3">
                <Spacing />
              </section>
              <section id="section4">
                <Screen />
              </section>

              <div className="pb-10">
                <FooterAllPage
                  title1="Vue.js Components"
                  title2="Credits and Resources"
                  link1="/components/vue-components"
                  link2="/credit-resources"
                />
              </div>
            </div>
          </div>
        </div>
        <RightNavigation array={customization_navigation} />
      </div>
    </>
  );
};

export default Customization;
