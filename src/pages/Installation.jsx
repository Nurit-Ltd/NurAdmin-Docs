import { useEffect, useState } from "react";
import HtmlAdmin from "../components/screen/Installation/HtmlAdmin";
import NextJsAdmin from "../components/screen/Installation/NextJsAdmin";
import ReactAdmin from "../components/screen/Installation/ReactAdmin";
import VueJsAdmin from "../components/screen/Installation/VueJsAdmin";
import TitleHeading from "../components/shared/TitleHeading";

const Installation = () => {
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
    <div>
       <TitleHeading
          title="Installation"
          description="This part of the documentation will show you how you can install and configure TailAdmin templates. Both Tailwind + AlpineJS and Tailwind + React."
        />
      <div className="flex relative ">
        <div className="">
          <section id="section1">
            <HtmlAdmin />
          </section>
          <section id="section2">
            <ReactAdmin />
          </section>
          <section id="section3">
            <NextJsAdmin />
          </section>
          <section id="section4">
            <VueJsAdmin />
          </section>
        </div>
        <nav className="fixed top-[105px] right-0 p-4 w-[220px] h-[150px]">
          <ul className="">
            <h4 className="px-6 mb-[6px] uppercase font-bold text-grayPrimary text-xs leading-[18px] tracking-[1.2px]" >On this page</h4>
            <li className={`px-6 my-1 ${activeSection === "section1" ? "text-blue-500 border-l-[3px] border-blueActive" : "border-l-[3px] border-white"}`}>
              <a href="#section1">Section 1</a>
            </li>
            <li className={activeSection === "section2" ? "text-blue-500" : ""}>
              <a href="#section2">Section 2</a>
            </li>
            <li className={activeSection === "section3" ? "text-blue-500" : ""}>
              <a href="#section3">Section 3</a>
            </li>
            <li className={activeSection === "section4" ? "text-blue-500" : ""}>
              <a href="#section4">Section 4</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Installation;
