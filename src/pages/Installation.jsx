import { useEffect, useState } from "react";
import HtmlAdmin from "../components/screen/Installation/HtmlAdmin";
import NextJsAdmin from "../components/screen/Installation/NextJsAdmin";
import ReactAdmin from "../components/screen/Installation/ReactAdmin";
import VueJsAdmin from "../components/screen/Installation/VueJsAdmin";
import FooterAllPage from "../components/shared/Footer/FooterAllPage";
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
    <div className="flex">
      <div>
        <TitleHeading
          emoji="🚀"
          title="Installation"
          description="This part of the documentation will show you how you can install and configure TailAdmin templates. Both Tailwind + AlpineJS and Tailwind + React."
        />
        <div>
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
          <div className="container_fluid pb-10">
            <FooterAllPage
              title1="Introduction"
              title2="Components"
              link1="/"
              link2="/components"
            />
          </div>
        </div>
      </div>
      <nav className="hidden xl1:block sticky top-[105px] right-0 p-4 h-[150px]">
        <ul>
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
              TailAdmin Vue: Tailwind + Vue.js
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
              TailAdmin React: Tailwind + React.js
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
              TailAdmin Next.js: Tailwind + Next.js
            </a>
          </li>
          <li
            className={`px-6 my-1 truncate ${
              activeSection === "section4"
                ? "text-activeBar border-l-[3px] border-activeBar"
                : "border-l-[3px] border-white"
            }`}
          >
            <a href="#section4" className="ml-2">
              TailAdmin Vue: Tailwind + Vue.js
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Installation;
