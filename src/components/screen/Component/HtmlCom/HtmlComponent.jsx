import { useEffect, useState } from "react";
import FooterAllPage from "../../../shared/Footer/FooterAllPage";
import TitleHeading from "../../../shared/TitleHeading";
import AnalyticsChart from "./AnalyticsChart";
import FormInputField from "./FormInputField";
import TodoList from "./TodoList";

const HtmlComponent = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentActive = null;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentActive = section.id;
        }
      });
      setActiveSection(currentActive);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <TitleHeading
        emoji="🌐"
        title="HTML Components"
        description="TailAdmin HTML: Tailwind + Alpine.js has more than 200 components, and you can use them to build any kind of dashboard you need.
          "
      />
      <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px] relative">
        <div className="container_fluid">
          <h5 className="pt-12 font-bold text-blueIcon leading-6">
            Here are a few examples of the components:
          </h5>

          <section id="section1">
            <FormInputField />
          </section>
          <section id="section2">
             <AnalyticsChart />
          </section>
          <section id="section3">
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
        <nav className="hidden xl1:block fixed top-[105px] right-0 p-4 w-[220px] h-[150px]">
          <ul className="">
            <h4 className="px-6 mb-[6px] uppercase font-bold text-grayPrimary text-xs leading-[18px] tracking-[1.2px]">
              On this page
            </h4>
            <li
              className={`px-6 my-1 truncate ${
                activeSection === "section1"
                  ? "text-activeBar border-l-[3px] border-activeBar"
                  : "border-l-[3px] border-white"
              }`}
            >
              <a href="#section1" className="ml-2">
                Form Input Field:
              </a>
            </li>
            <li
              className={`px-6 my-1 truncate ${
                activeSection === "section2"
                  ? "text-activeBar border-l-[3px] border-activeBar"
                  : "border-l-[3px] border-white"
              }`}
            >
              <a href="#section2" className="ml-2">
                Analytics Chart:
              </a>
            </li>
            <li
              className={`px-6 my-1 truncate ${
                activeSection === "section3"
                  ? "text-activeBar border-l-[3px] border-activeBar"
                  : "border-l-[3px] border-white"
              }`}
            >
              <a href="#section3" className="ml-2">
                Todo List:
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HtmlComponent;
