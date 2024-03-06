import FooterAllPage from "../../../components/shared/Footer/FooterAllPage";
import { updateHtml } from "../../../data/updateHtml";
import TitleHeading from "../../shared/TitleHeading";


const UpdateHtml = () => {
  return (
    <>
      <TitleHeading
        title="HTML"
        description="Update Logs for TailAdmin HTML version"
      />
      <div className="w-[828px]">
        <div className="container_fluid">
          <div className="pt-12 pb-20">
            {updateHtml.slice(0, 1).map((update) => (
              <div key={update.id}>
                <h2 className="text-xl text-headingText font-bold leading-6">
                  Version {update.version} - [{update.releaseDate[0]}, 
                   {update.releaseDate[1]}]
                </h2>
                {update.newFeatures && (
                  <div>
                    <h3 className="pt-6 text-headingText font-bold leading-6">New Features</h3>
                    <ul className="pt-8 list-disc list-inside ml-3 space-y-2">
                      {update.newFeatures.map((feature) => (
                        <li key={feature.id}>
                          <span className="text-headingText font-bold leading-6">{feature.name}</span>: <span className="text-headingText leading-6">{feature.details}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {update.enhancements && (
                  <div>
                    <h3 className="py-8 text-headingText font-bold leading-6">Enhancements</h3>
                    <ul className="list-disc list-inside ml-3 space-y-2">
                      {update.enhancements.map((enhancement) => (
                        <li key={enhancement.id}>
                          <span className="text-headingText font-bold leading-6">{enhancement.name}</span>: <span className="text-headingText leading-6">{enhancement.details}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            <div>
              {updateHtml.slice(1).map((update) => (
                <div key={update.id}>
                  <h3 className=" py-8 text-headingText font-bold leading-6">{update.version} - {update.releaseDate}</h3>
                  
                  <ul className="list-disc list-inside ml-3 space-y-2">
                    {update.features.map((enhancement,index) => (
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

export default UpdateHtml;
