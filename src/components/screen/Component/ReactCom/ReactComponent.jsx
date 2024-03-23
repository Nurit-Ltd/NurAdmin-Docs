import ReactMarkdown from "react-markdown";
import CopyToClip from "../../../shared/CopyToClip";
import FooterAllPage from "../../../shared/Footer/FooterAllPage";
import TitleHeading from "../../../shared/TitleHeading";
import Accordion from "./Accordion";
import Arts from "./Arts";
import BreadCum from "./BreadCum";
import RightNavigation from "../../../shared/RightNavigation/RightNavigation";
import { components_react } from "../../../../data/navigation";

const ReactComponent = () => {
  const markdown = `
  \`\`\`html
  import ComponentName from '../components/ComponentName';
  \`\`\`
  `;
  return (
    <>
      <div className="flex">
        <div>
          <TitleHeading
            emoji="💎"
            title="React.js Components"
            description="NurAdmin: ReactJS + Tailwind offer more than 200 dashboard UI components. You can use them to build ReactJS + Tailwind CSS dashboard templates easily.
          "
          />
          <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px] relative">
            <div className="container_fluid">
              <div>
                <div className="space-y-3 pt-9 text-headingText leading-6">
                  <p>
                    To use the ReactJS components first you’ll have to import
                    them.
                  </p>
                  <p>You can do that easily by following this command.</p>
                </div>
                <div className="py-9 flex items-center">
                  <div className=" w-full  relative">
                    <div className="group  px-4 py-2 bg-bgBluer overflow-x-auto">
                      <ReactMarkdown>{markdown}</ReactMarkdown>
                      <CopyToClip markdown={markdown} />
                    </div>
                  </div>
                </div>
                <h5 className="font-bold text-blueIcon leading-6">
                  Here are a few examples of the components:
                </h5>
              </div>
              <section id="section1">
                <BreadCum />
              </section>
              <section id="section2">
                <Arts />
              </section>
              <section id="section3">
                <Accordion />
              </section>

              <div className="pb-10">
                <FooterAllPage
                  title1="HTML Components"
                  title2="Next.js Components"
                  link1="/components/html-components"
                  link2="/components/next-components"
                />
              </div>
            </div>
          </div>
        </div>
        <RightNavigation array={components_react} />
      </div>
    </>
  );
};

export default ReactComponent;
