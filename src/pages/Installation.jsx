import HtmlAdmin from "../components/screen/Installation/HtmlAdmin";
import NextJsAdmin from "../components/screen/Installation/NextJsAdmin";
import ReactAdmin from "../components/screen/Installation/ReactAdmin";
import VueJsAdmin from "../components/screen/Installation/VueJsAdmin";
import FooterAllPage from "../components/shared/Footer/FooterAllPage";
import TitleHeading from "../components/shared/TitleHeading";
import RightNavigation from "../components/shared/RightNavigation/RightNavigation";
import { installation_navigations } from "../data/navigation";

const Installation = () => {
  return (
    <div className="flex">
      <div>
        <TitleHeading
          emoji="🚀"
          title="Installation"
          description="This part of the documentation will show you how you can install and configure NurAdmin templates. Both Tailwind + AlpineJS and Tailwind + React."
        />
        <div>
          <section id="section1" data-aos="fade-up">
            <HtmlAdmin />
          </section>
          <section id="section2" data-aos="fade-up">
            <ReactAdmin />
          </section>
          <section id="section3" data-aos="fade-up">
            <NextJsAdmin />
          </section>
          <section id="section4" data-aos="fade-up">
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
      <RightNavigation array={installation_navigations} />
    </div>
  );
};

export default Installation;
