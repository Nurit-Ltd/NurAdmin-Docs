import FooterAllPage from "../../../components/shared/Footer/FooterAllPage";
import { updateVue } from "../../../data/updateVue";
import TitleHeading from "../../shared/TitleHeading";

const UpdateVue = () => {
  return (
    <>
      <TitleHeading
        title="Next.js"
        description="Update Logs for TailAdmin Next.js version"
      />
      <div className="w-[828px]">
        <div className="container_fluid">
          <div className="pt-12 pb-20">
            {updateVue.map((update) => (
              <div key={update.id}>
                <h3 className=" py-6 text-headingText font-bold leading-6">
                  {update.releaseDate}
                </h3>

                <ul className="list-disc list-inside ml-3 ">
                  {update.features.map((enhancement, index) => (
                    <li key={index} className="text-headingText leading-6">
                      {enhancement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pb-10">
            <FooterAllPage
              title1="Introduction"
              title2="Components"
              link1="/"
              link2="/components"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateVue;
