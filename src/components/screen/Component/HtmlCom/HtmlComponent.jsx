import FooterAllPage from "../../../shared/Footer/FooterAllPage";
import TitleHeading from "../../../shared/TitleHeading";
import AnalyticsChart from "./AnalyticsChart";
import FormInputField from "./FormInputField";
import TodoList from "./TodoList";
import RightNavigation from "../../../shared/RightNavigation/RightNavigation";
import { components_html } from "../../../../data/navigation";

const HtmlComponent = () => {
  return (
    <>
      <div className="flex">
        <div>
          <TitleHeading
            emoji="🌐"
            title="HTML Components"
            description="NurAdmin HTML: Tailwind + Alpine.js has more than 200 components, and you can use them to build any kind of dashboard you need.
          "
          />
          <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px] relative">
            <div className="container_fluid">
              <h5 className="pt-12 font-bold text-blueIcon leading-6">
                Here are a few examples of the components:
              </h5>

              <section id="section1" data-aos="fade-up">
                <FormInputField />
              </section>
              <section id="section2" data-aos="fade-up">
                <AnalyticsChart />
              </section>
              <section id="section3" data-aos="fade-up">
                <TodoList />
              </section>
              <div className="pb-10">
                <FooterAllPage
                  title1="Components"
                  title2="React.js Components"
                  link1="/components"
                  link2="/components/react-components"
                />
              </div>
            </div>
          </div>
        </div>
        <RightNavigation array={components_html} />
      </div>
    </>
  );
};

export default HtmlComponent;
