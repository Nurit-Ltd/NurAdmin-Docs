import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import happy from "../../../assets/icon/happy.svg";
import sad from "../../../assets/icon/sad.svg";
import stop from "../../../assets/icon/stop.svg";

const FooterAllPage = ({ title1, title2, link1, link2 }) => {
  return (
    <div>
      <div className="pt-10 w-full flex flex-col xl:flex-row items-center gap-4">
        <Link
          to={link1}
          className="w-full xl:w-1/2 border p-4 flex items-center justify-between text-grayPrimary hover:text-blueActive focus:text-blueActive footer_bar duration-200"
        >
          <div>
            <GoArrowLeft className="w-6 h-6" />
          </div>
          <div className=" text-end">
            <p className="text-xs text-grayPrimary leading-[18px]">Previous</p>

            <h4 className="font-medium">{title1}</h4>
          </div>
        </Link>
        <Link
          to={link2}
          className="w-full xl:w-1/2 border p-4 flex items-center justify-between text-grayPrimary hover:text-blueActive focus:text-blueActive footer_bar duration-200"
        >
          <div>
            <p className="text-xs text-grayPrimary leading-[18px]">Next</p>
            <h4 className="font-medium">{title2}</h4>
          </div>
          <div>
            <GoArrowRight className="w-6 h-6" />
          </div>
        </Link>
      </div>
      <div className="mt-6 pt-6 border-t  flex flex-col xl:flex-row items-center xl:items-center justify-center xl:justify-between ">
        <div className="text-sm text-grayPrimary font-normal leading-[22px]">
          Last modified 24d ago
        </div>

        <div className="w-[240px] flex items-center gap-2">
          <h5 className="font-semibold uppercase text-xs tracking-[1.2px] leading-[18px]">
            Was this page helpful?
          </h5>
          <div className="flex items-center gap-2">
            <img src={sad} alt="sad" className="hover:text-red-500" />
            <img src={happy} alt="happy" />
            <img src={stop} alt="stop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAllPage;
