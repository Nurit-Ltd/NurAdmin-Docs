import { useEffect, useState } from "react";
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
      <div className="w-[828px] relative">
        <div className="container_fluid">
          <div className="pt-9 text-headingText leading-6">
            <p>
              You can add your personalized styling by customizing the config
              file. You can customize things like <span className="font-bold">Colors</span>, <span className="font-bold">Screens</span>, <span className="font-bold">Spacing</span>, and
              many more.
            </p>
          </div>

          <section id="section1">
          
          </section>
          <section id="section2">
           
          </section>
          <section id="section3">
            
          </section>

          <div className="pb-10">
            <FooterAllPage
              title1="Introduction"
              title2="Components"
              link1="/"
              link2="/components"
            />
          </div>
        </div>
        <nav className="fixed top-[105px] right-0 p-4 w-[220px] h-[150px]">
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
                Breadcrumb:
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
                Alerts:
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
                Accordion:
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Customization;
