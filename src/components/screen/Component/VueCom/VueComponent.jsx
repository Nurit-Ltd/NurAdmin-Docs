import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import CopyToClip from "../../../shared/CopyToClip";
import FooterAllPage from "../../../shared/Footer/FooterAllPage";
import TitleHeading from "../../../shared/TitleHeading";
import VueAccordion from "./VueAccordion";
import VueArts from "./VueArts";
import VueBreadCum from "./VueBreadCum";

const VueComponent = () => {
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

  const markdown = `
  \`\`\`
  <script setup lang="ts">
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
</script>
  \`\`\`
  `;
  return (
    <>
      <TitleHeading
        emoji="🌳"
        title="Vue.js Components"
        description="TailAdmin: Vue.js + Tailwind offer more than 200 dashboard UI components. You can use them to build ReactJS + Tailwind CSS dashboard templates easily..
          "
      />
      <div className="w-[828px] relative">
        <div className="container_fluid">
          <div>
            <div className="space-y-3 pt-9 text-headingText leading-6">
              <p>
                To use the Vue.js components first you’ll have to import them.
              </p>
              <p>You can do that easily by following this command.</p>
            </div>
            <div className="mt-8 w-full relative">
              <div className="group  px-4 py-2 bg-bgBluer overflow-x-auto">
                <ReactMarkdown>{markdown}</ReactMarkdown>
                <CopyToClip markdown={markdown} />
              </div>
            </div>
            <h5 className="font-bold text-blueIcon leading-6">
              Here are a few examples of the components:
            </h5>
          </div>
          <section id="section1">
            <VueBreadCum />
          </section>
          <section id="section2">
            <VueArts />
          </section>
          <section id="section3">
            <VueAccordion />
          </section>

          <div className="pb-10">
            <FooterAllPage
              title1="Next.js Components"
              title2="Customization"
              link1="/components/next-components"
              link2="/customization"
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

export default VueComponent;
