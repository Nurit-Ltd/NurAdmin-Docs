import { Link } from "react-router-dom";
import TitleHeading from "../components/shared/TitleHeading";
import { components } from "../data/components";

const Components = () => {
  return (
    <>
      <TitleHeading title="Components" />
      <div className="w-[828px]">
        <div className="container_fluid">
          <div className="mt-25 ">
            {components.map((language) => (
              <div key={language.id} className="w-full h-[66px] border p-4">
              <Link
                to={language.link}
                
                className=""
              >
                <div className="flex items-center gap-5">
                  <div>{language.img}</div>
                  <h4>{language.title}</h4>
                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Components;
