import ReactMarkdown from "react-markdown";
import CopyToClip from "../../../shared/CopyToClip";
import FooterAllPage from "../../../shared/Footer/FooterAllPage";
import TitleHeading from "../../../shared/TitleHeading";
import VueAccordion from "./VueAccordion";
import VueArts from "./VueArts";
import VueBreadCum from "./VueBreadCum";
import RightNavigation from "../../../shared/RightNavigation/RightNavigation";
import { components_vuejs } from "../../../../data/navigation";

const VueComponent = () => {
  const markdown = `
  \`\`\`
  <script setup lang="ts">
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
</script>
  \`\`\`
  `;
  return (
    <>
      <div className="flex">
        <div>
          <TitleHeading
            emoji="🌳"
            title="Vue.js Components"
            description="NurAdmin: Vue.js + Tailwind offer more than 200 dashboard UI components. You can use them to build ReactJS + Tailwind CSS dashboard templates easily..
          "
          />
          <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px] relative">
            <div className="container_fluid">
              <div>
                <div className="space-y-3 pt-9 text-headingText leading-6">
                  <p>
                    To use the Vue.js components first you’ll have to import
                    them.
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
          </div>
        </div>
        <RightNavigation array={components_vuejs} />
      </div>
    </>
  );
};

export default VueComponent;
