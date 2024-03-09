
import { Link } from "react-router-dom";
import CopyText from "../../shared/CopyText";

const ReactAdmin = () => {
  return (
    <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px]">
      <div className="container_fluid">
        <div className="pt-20">
          <div className="pb-2">
            <h3 className="text-xl leading-6 text-headingText font-bold">
              TailAdmin React: Tailwind + React.js
            </h3>
          </div>
          <div className="pt-3 space-y-3 text-headingText leading-6">
            <p>
              In this part, we are going to show you how to install the
              TailAdmin React template.
            </p>
            <p>Follow these steps to install the templates.</p>
            <p>
              <span className="font-bold">Note:</span> We’ve used Vite to
              develop the Tailwind + ReactJS template.
            </p>
          </div>
          <div className="py-4">
            <ul className="pl-1 list-decimal list-inside space-y-2 text-headingText">
              <li>Download the dashboard template from TailAdmin</li>
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
                npm <span className="text-headingText">run dev</span>
              </p>

              <div className="opacity-0 group-hover:opacity-100 duration-300">
                <CopyText textToCopy="npm run dev" />
              </div>
            </div>
            <div className="space-y-4 pt-9">
              <p className="text-headingText max-w-[550px] leading-6">
                When the dev command runs successfully the Dashboard will be
                open on port:{" "}
                <span className="text-blueActive">
                  <Link to={"http://localhost:5173/"}>
                    http://localhost:5173/
                  </Link>
                </span>
              </p>
              <p className="text-headingText leading-6">
                Now you can customize the dashboard and see the changes locally.
              </p>
              <p className="text-headingText leading-6">
                After that, run this command to generate the <span className="font-medium">build</span> folder. You
                can upload this build folder to your server, and the dashboard
                will be live.
              </p>
              <p className="text-redText bg-bgBluer px-1 w-fit">npm run build</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactAdmin;
