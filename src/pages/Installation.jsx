import { useEffect, useState } from "react";
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
          <section id="section1"></section>
          <section id="section2"></section>
          <section id="section3"></section>
        </div>
        <nav className=" fixed  top-[105px] right-0 bg-gray-800 text-white p-4 w-[220px] h-[150px]">
          <ul className="">
            <li className={activeSection === "section1" ? "text-blue-500" : ""}>
              <a href="#section1">Section 1</a>
            </li>
            <li className={activeSection === "section2" ? "text-blue-500" : ""}>
              <a href="#section2">Section 2</a>
            </li>
            <li className={activeSection === "section3" ? "text-blue-500" : ""}>
              <a href="#section3">Section 3</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Installation;
