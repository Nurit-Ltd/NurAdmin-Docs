
import CopyText from "../../shared/CopyText";

const NextJsAdmin = () => {
  return (
    <div className="w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px]">
      <div className="container_fluid">
        <div className="pt-20">
          <div className="pb-2">
            <h3 className="text-xl leading-6 text-headingText font-bold">
            TailAdmin Next.js: Tailwind + Next.js
            </h3>
          </div>
          <div className="pt-3 space-y-3 text-headingText leading-6">
            <p>
            In this part, we are going to show you how to install the TailAdmin Next.js template.
            </p>
            <p>Follow these steps to install the templates.</p>
            <p>
            Here are the steps you need to follow to install the dependencies.
            </p>
          </div>
          <div className="py-4">
            <ul className="pl-1 list-decimal list-inside space-y-2 text-headingText">
              <li>Download and extract the template from Next.js Templates.</li>
              <li>After that <strong>cd</strong> into the template directory then run this command to install all the dependencies</li>
            </ul>
          </div>
          <div className="space-y-5">
            <div className="mt-5 py-2 pl-5 pr-2 w-full h-[38px] flex items-center justify-between bg-bgBluer group ">
              <p className="text-xs text-headingText font-medium leading-[22px]">
                npm install
              </p>

              <div className="opacity-0 group-hover:opacity-100 duration-300">
                <CopyText textToCopy="npm install" />
              </div>
            </div>
            <p className="text-headingText leading-6">
              or
            </p>
            <div className="py-2 pl-5 pr-2 w-full h-[38px] flex items-center justify-between bg-bgBluer group ">
              <p className="text-xs text-headingText font-medium leading-[22px]">
                yarn install
              </p>

              <div className="opacity-0 group-hover:opacity-100 duration-300">
                <CopyText textToCopy="yarn install" />
              </div>
            </div>
            <p className="text-headingText leading-6"> <span className="pr-2">3.</span> Now run this command to start the developement server</p>
            <div className="mt-5 py-2 pl-5 pr-2 w-full h-[38px] flex items-center justify-between bg-bgBluer group ">
              <p className="text-xs text-headingText font-medium leading-[22px]">
              npm run dev
              </p>

              <div className="opacity-0 group-hover:opacity-100 duration-300">
                <CopyText textToCopy="npm run dev" />
              </div>
            </div>
            <p className="text-headingText leading-6">
              or
            </p>
            <div className="py-2 pl-5 pr-2 w-full h-[38px] flex items-center justify-between bg-bgBluer group ">
              <p className="text-xs text-headingText font-medium leading-[22px]">
                yarn dev
              </p>

              <div className="opacity-0 group-hover:opacity-100 duration-300">
                <CopyText textToCopy="yarn dev" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextJsAdmin;
