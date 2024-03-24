import { useEffect, useState } from "react";

const RightNavigation = ({ array }) => {
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
      <nav className="hidden xl1:block sticky top-[105px] right-0 p-4 h-[150px]">
        <ul>
          <h4 className="px-6 mb-[6px] uppercase font-bold text-grayPrimary text-xs leading-[18px] tracking-[1.2px]">
            On this page
          </h4>
          {array.map((item, i) => {
            return (
              <li
                key={i}
                className={`px-6 my-1 truncate ${
                  activeSection === item.id
                    ? "text-activeBar border-l-[3px] border-activeBar"
                    : "border-l-[3px] border-white"
                }`}
              >
                <a href={`#${item.id}`} className="ml-2">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default RightNavigation;
