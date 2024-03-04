import { useEffect, useState } from "react";
import FooterAllPage from "../../shared/Footer/FooterAllPage";
import TitleHeading from "../../shared/TitleHeading";

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
      <div className="">
        <div className="">
          <section id="section1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quisquam facere odio rerum aspernatur obcaecati veritatis modi,
            dolore quos ipsum, tenetur ullam, esse fugit. Alias voluptatem quo
            mollitia iusto adipisci.
          </section>
          <section id="section2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            sit ad cupiditate animi omnis dolore unde natus veritatis illo
            accusantium quia autem officiis alias, dolor rerum vitae tempora
            enim. Rerum?
          </section>
          <section id="section3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            praesentium tempore nisi ipsam laboriosam aliquid quo porro aperiam
            reiciendis culpa voluptates quis officia voluptate natus eaque
            quibusdam suscipit, sint a.
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
        <nav className="fixed top-[105px] right-0 p-4 w-[220px] h-[150px]">
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
