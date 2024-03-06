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
          <div className="pt-12">
            {updateHtml.slice(0, 1).map((update) => (
              <div key={update.id}>
                <h2>
                  Version {update.version} - {update.releaseDate[0]}{" "}
                  {update.releaseDate[1]}
                </h2>
                {update.newFeatures && (
                  <div>
                    <h3>New Features</h3>
                    <ul className="list-disc list-inside">
                      {update.newFeatures.map((feature) => (
                        <li key={feature.id}>
                          {feature.name}: {feature.details}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {update.enhancements && (
                  <div>
                    <h3>Enhancements</h3>
                    <ul className="list-disc list-inside">
                      {update.enhancements.map((enhancement) => (
                        <li key={enhancement.id}>
                          {enhancement.name}: {enhancement.details}
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
                  Version {update.version} - {update.releaseDate}
                  <ul className="list-disc list-inside">
                    {update.features.map((enhancement,index) => (
                      <li key={index}>
                        {enhancement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateHtml;
