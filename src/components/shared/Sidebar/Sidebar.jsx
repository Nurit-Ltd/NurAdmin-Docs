import { useState } from "react";
import { FaBook } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { fixedPart, menus } from "../../../data/menuData";

const Sidebar = () => {
  const location = useLocation();
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative">
      <div className="w-[293px] h-[470px]  hidden md:block overflow-y-auto">
        <div className="ml-6 py-4  fixed  md:h-[360px] xl:h-[470px] overflow-y-auto">
          {menus.map((menu, index) => (
            <div key={index} className="">
             
                <Link
                  onClick={() => toggleMenu(index)}
                  to={menu.link}
                  className={`sidebar flex items-center justify-between gap-4   text-sm leading-[22px] ${
                    location.pathname === menu.link
                      ? "text-blueActive bg-activeBg font-bold"
                      : "text-grayMenu hover:bg-hoverBg duration-200"
                  }`}
                >
                  <div className=" flex items-center gap-3 ">
                    <span>{menu.emoji}</span>
                    <span>{menu.label}</span>
                  </div>
                  {menu.submenus && (
                    <span>
                      {openMenuIndex === index ? (
                        <MdKeyboardArrowDown className="w-[18px] h-[18px] text-blueActive" />
                      ) : (
                        <MdKeyboardArrowRight className="w-[18px] h-[18px]" />
                      )}
                    </span>
                  )}
                </Link>
             
              {openMenuIndex === index && (
                <div className="ml-2 mt-1 mb-2">
                  <div className="border-l">
                    <ul className="pl-2 space-y-1">
                      {menu.submenus.map((submenu, subIndex) => (
                        <Link
                          to={submenu.link}
                          key={subIndex}
                          className={`gap-3 w-[244px] h-8 flex items-center  px-2  ${
                            location.pathname === submenu.link
                              ? "text-blueActive bg-activeBg font-bold"
                              : "text-grayMenu hover:bg-hoverBg duration-200 "
                          }`}
                        >
                          <span> {submenu.img}</span>

                          <span>{submenu.label}</span>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        {fixedPart.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className=" fixed left-0 bottom-0 w-[293px] h-[60px] px-4 pb-4 mb-4 cursor-pointer hidden md:block"
          >
            <div className="w-full h-[60px] bg-grayFix p-4 flex items-center gap-4 ">
              <FaBook size={24} className="text-headingText" />
              <p className="text-sm text-grayPrimary leading-5 ">
                {item.label} <span className="font-bold">{item.strong}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
