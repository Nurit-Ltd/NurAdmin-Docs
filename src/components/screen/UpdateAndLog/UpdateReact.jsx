import FooterAllPage from "../../../components/shared/Footer/FooterAllPage";
import { updateReact } from "../../../data/updateReact";
import TitleHeading from "../../shared/TitleHeading";

const UpdateReact = () => {
  return (
    <>
      <TitleHeading
        title="React"
        description="Update Logs for NurAdmin React version"
      />
      <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px]">
        <div className="container_fluid">
          <div className="pt-12 pb-20">
            {updateReact.slice(0, 1).map((update) => (
              <div key={update.id} data-aos="fade-up">
                <h2 className="text-xl text-headingText font-bold leading-6">
                  Version {update.version} - [{update.releaseDate[0]},
                  {update.releaseDate[1]}]
                </h2>
                {update.newFeatures && (
                  <div>
                    <h3 className="pt-6 text-headingText font-bold leading-6">
                      New Features
                    </h3>
                    <ul className="pt-8 list-disc list-inside ml-3 space-y-2">
                      {update.newFeatures.map((feature) => (
                        <li key={feature.id}>
                          <span className="text-headingText font-bold leading-6">
                            {feature.name}
                          </span>
                          :{" "}
                          <span className="text-headingText leading-6">
                            {feature.details}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {update.enhancements && (
                  <div>
                    <h3 className="py-8 text-headingText font-bold leading-6">
                      Enhancements
                    </h3>
                    <ul className="list-disc list-inside ml-3 space-y-2">
                      {update.enhancements.map((enhancement) => (
                        <li key={enhancement.id}>
                          <span className="text-headingText font-bold leading-6">
                            {enhancement.name}
                          </span>
                          :{" "}
                          <span className="text-headingText leading-6">
                            {enhancement.details}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            <div>
              {updateReact.slice(1).map((update) => (
                <div key={update.id}>
                  <h3 className=" py-8 text-headingText font-bold leading-6">
                    {update.releaseDate}
                  </h3>

                  <ul className="list-disc list-inside ml-3 space-y-2">
                    {update.features.map((enhancement, index) => (
                      <li key={index} className="text-headingText leading-6">
                        {enhancement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="pb-10">
            <FooterAllPage
              title1="HTML"
              title2="Next.js"
              link1="/update-log/html"
              link2="/update-log/next.js"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateReact;
