import { useEffect, useState } from "react";
import Color from "../components/screen/Customization/Color";
import DarkMode from "../components/screen/Customization/DarkMode";
import Screen from "../components/screen/Customization/Screen";
import Spacing from "../components/screen/Customization/Spacing";
import FooterAllPage from "../components/shared/Footer/FooterAllPage";
import TitleHeading from "../components/shared/TitleHeading";

const Customization = () => {
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
        emoji="💅"
        title="Customization"
        description="In this part of the documentation, we are going to show you how you can customize the tailwind.config.js file.
          "
      />
      <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px] relative">
        <div className="container_fluid">
          <div className="pt-9 text-headingText leading-6">
            <p>
              You can add your personalized styling by customizing the config
              file. You can customize things like <span className="font-bold">Colors</span>, <span className="font-bold">Screens</span>, <span className="font-bold">Spacing</span>, and
              many more.
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
        <nav className="hidden xl:block fixed top-[105px] right-0 p-4 w-[220px] h-[150px]">
          <ul className="">
            <h4 className="px-6 mb-[6px] uppercase font-bold text-grayPrimary text-xs leading-[18px] tracking-[1.2px]">
              On this page
            </h4>
            <li
              className={`px-6 my-1 truncate ${
                activeSection === "section1"
                  ? "text-activeBar border-l-[3px] border-activeBar"
                  : "border-l-[3px] border-white text-headingText"
              }`}
            >
              <a href="#section1" className="ml-2">
                Colors:
              </a>
            </li>
            <li
              className={`px-6 my-1 truncate ${
                activeSection === "section2"
                  ? "text-activeBar border-l-[3px] border-activeBar"
                  : "border-l-[3px] border-white text-headingText"
              }`}
            >
              <a href="#section2" className="ml-2">
                Dark Mode Settings:
              </a>
            </li>
            <li
              className={`px-6 my-1 truncate ${
                activeSection === "section3"
                  ? "text-activeBar border-l-[3px] border-activeBar"
                  : "border-l-[3px] border-white text-headingText"
              }`}
            >
              <a href="#section3" className="ml-2">
                Spacing:
              </a>
            </li>
            <li
              className={`px-6 my-1 truncate ${
                activeSection === "section4"
                  ? "text-activeBar border-l-[3px] border-activeBar"
                  : "border-l-[3px] border-white text-headingText"
              }`}
            >
              <a href="#section3" className="ml-2">
                Screen:
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Customization;
