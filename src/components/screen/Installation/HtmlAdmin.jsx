import CopyText from "../../shared/CopyText";

import { Link } from "react-router-dom";

const HtmlAdmin = () => {
  return (
    <div className="w-[828px]">
      <div className="container_fluid">
        <div className="pt-20">
          <div className="pb-2">
            <h3 className="text-xl leading-6 text-headingText font-bold">
              TailAdmin HTML: Tailwind + Alpine.js
            </h3>
          </div>
          <div className="pt-3 space-y-3 text-headingText leading-6">
            <p>
              To use the TailAdmin dashboard template, you'll first have to
              install it.
            </p>
            <p>
              Follow these steps to install the{" "}
              <span className="text-blueActive">
                <Link to={"#"}> TailAdmin Tailwind + AlpineJS</Link>
              </span>{" "}
              template:
            </p>
            <p>
              <span className="font-bold">Note:</span> You’ll have to have
              Node.js installed on your machine. Otherwise, these commands won’t
              work.
            </p>
          </div>
          <div className="py-4">
            <ul className="pl-1 list-decimal list-inside space-y-2 text-headingText">
              <li>
                Download the dashboard template from TailAdmin, and extract it.
              </li>
              <li>Then navigate to the project folder and run this command:</li>
            </ul>
          </div>
          <div>
            <div className="mt-5 py-2 pl-5 pr-2 w-full h-[38px] flex items-center justify-between bg-bgBluer group ">
              <p className="text-xs text-textPerpel font-medium leading-[22px]">
                npm install
              </p>

              <div className="opacity-0 group-hover:opacity-100 duration-300">
                <CopyText textToCopy="npm install" />
              </div>
            </div>
            <p className="py-9 text-headingText leading-6">
              1. After that run this command to start the local server.
            </p>
            <div className="py-2 pl-5 pr-2 w-full h-[38px] flex items-center justify-between bg-bgBluer group ">
              <p className="text-xs text-textPerpel font-medium leading-[22px]">
                npm <span className="text-headingText">run start</span>
              </p>

              <div className="opacity-0 group-hover:opacity-100 duration-300">
                <CopyText textToCopy="npm run start" />
              </div>
            </div>
            <p className="pt-9 pb-5 text-headingText leading-6">
              Now you can make the changes.
            </p>
            <p className="pb-9 text-headingText leading-6">
              After you’ve made the changes, run this command to generate the
              build folder, you can upload this build folder to the server.
            </p>
            <div className="py-2 pl-5 pr-2 w-full h-[38px] flex items-center justify-between bg-bgBluer group ">
              <p className="text-xs text-textPerpel font-medium leading-[22px]">
                npm <span className="text-headingText">run build</span>
              </p>

              <div className="opacity-0 group-hover:opacity-100 duration-300">
                <CopyText textToCopy="npm run build" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlAdmin;
