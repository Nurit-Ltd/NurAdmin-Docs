import ReactMarkdown from "react-markdown";
import CopyToClip from "../../../shared/CopyToClip";
import FooterAllPage from "../../../shared/Footer/FooterAllPage";
import TitleHeading from "../../../shared/TitleHeading";
import NextAccordion from "./NextAccordion";
import NextArts from "./NextArts";
import NextBreadCum from "./NextBreadCum";
import RightNavigation from "../../../shared/RightNavigation/RightNavigation";
import { components_nextjs } from "../../../../data/navigation";

const NextComponents = () => {
  const markdown = `
  \`\`\`
  import ComponentName from '../components/ComponentName';
  \`\`\`
  `;
  return (
    <>
      <div className="flex">
        <div>
          <TitleHeading
            emoji="🔥"
            title="Next.js Components"
            description="NurAdmin: Next.js + Tailwind offer more than 200 dashboard UI components. You can use them to build ReactJS + Tailwind CSS dashboard templates easily..
          "
          />
          <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px] relative">
            <div className="container_fluid">
              <div>
                <div className="space-y-3 pt-9 text-headingText leading-6">
                  <p>
                    To use the Next.js components first you’ll have to import
                    them.
                  </p>
                  <p>You can do that easily by following this command.</p>
                </div>
                <div className="my-5 py-2 pr-2 w-full h-[38px] flex items-center justify-between bg-bgBluer group relative ">
                  <div className="group  px-4 bg-bgBluer overflow-x-auto">
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                    <CopyToClip markdown={markdown} />
                  </div>
                </div>
                <h5 className="font-bold text-blueIcon leading-6">
                  Here are a few examples of the components:
                </h5>
              </div>
              <section id="section1">
                <NextBreadCum />
              </section>
              <section id="section2">
                <NextArts />
              </section>
              <section id="section3">
                <NextAccordion />
              </section>

              <div className="pb-10">
                <FooterAllPage
                  title1="React.js Components"
                  title2="Vue.js Components"
                  link1="/components/react-components"
                  link2="/components/vue-components"
                />
              </div>
            </div>
          </div>
        </div>
        <RightNavigation array={components_nextjs} />
      </div>
    </>
  );
};

export default NextComponents;
