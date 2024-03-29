import { Link } from "react-router-dom";
import CopyText from "../../shared/CopyText";

const VueJsAdmin = () => {
  return (
    <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px]">
      <div className="container_fluid">
        <div className="pt-20">
          <div className="pb-2">
            <h3 className="text-xl leading-6 text-headingText font-bold">
              NurAdmin Vue: Tailwind + Vue.js
            </h3>
          </div>
          <div className="pt-3 space-y-3 text-headingText leading-6">
            <p className="max-w-[634px]">
              In this section, we ll guide you through the installation process
              of the NurAdmin Vue template.
            </p>
            <p>Follow these steps to install the template:</p>
            <p>
              <span className="font-bold">Note:</span> We ve utilized
              <span className="font-bold"> Vite </span> as build tool for
              NurAdmin Vue.
            </p>
          </div>
          <div className="py-4">
            <ul className="pl-1 list-decimal list-inside space-y-2 text-headingText">
              <li>Download and extract the NurAdmin zip package</li>
              <li>
                Navigate to the project folder and execute the following
                command:
              </li>
            </ul>
          </div>
          <div>
            <div className="mt-5 py-2 pl-5 pr-2 w-full h-[38px] flex items-center justify-between bg-bgBluer group ">
              <p className="text-xs text-textPerpel font-medium leading-[22px]">
                npm install
              </p>

              <div>
                <CopyText textToCopy="npm install" />
              </div>
            </div>
            <p className="py-9 text-headingText leading-6">
              3. After that, run this command to start the local server:
            </p>
            <div className="py-2 pl-5 pr-2 w-full h-[38px] flex items-center justify-between bg-bgBluer group ">
              <p className="text-xs text-textPerpel font-medium leading-[22px]">
                npm <span className="text-headingText">run dev</span>
              </p>

              <div>
                <CopyText textToCopy="npm run dev" />
              </div>
            </div>
            <div className="space-y-4 pt-9">
              <p className="text-headingText max-w-[550px] leading-6">
                Upon successful execution of the dev command, the NurAdmin will
                open on port:
                <span className="text-blueActive">
                  <Link to={"http://localhost:5173/"}>
                    http://localhost:5173/
                  </Link>
                </span>
              </p>
              <p className="text-headingText leading-6">
                Now, you can customize the dashboard and observe the changes
                locally
              </p>
              <p className="text-headingText leading-6">
                Once customization is complete, run the following command to
                generate the <span className="font-medium">build</span> folder.
                You can then upload this build folder to your server, and the
                dashboard will be live.
              </p>

              <div className="py-2 pl-5 pr-2 w-full h-[38px] flex items-center justify-between bg-bgBluer group ">
                <p className="text-xs text-textPerpel font-medium leading-[22px]">
                  npm <span className="text-headingText">run build</span>
                </p>

                <div>
                  <CopyText textToCopy="npm run build" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VueJsAdmin;
