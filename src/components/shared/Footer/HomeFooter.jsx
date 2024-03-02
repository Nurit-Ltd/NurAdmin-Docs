import { GoArrowRight } from "react-icons/go";

const HomeFooter = () => {
  return (
    <div className="container_fluid">
      <div className="pt-6">
         <div className="w-full border p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-grayPrimary leading-[18px]">Next</p>
              <h4 className="font-medium text-grayPrimary">Installation</h4>
            </div>
            <div>
              <GoArrowRight className="w-6 h-6"/>
            </div>
         </div>
      </div>
    </div>
  );
};

export default HomeFooter;