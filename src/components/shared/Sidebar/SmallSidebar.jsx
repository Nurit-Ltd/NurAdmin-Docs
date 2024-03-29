import { useState } from "react";
import { FaBook } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { fixedPart, menus } from "../../../data/menuData";

const SmallSidebar = ({ setShowSidebar, showSidebar }) => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative">
      <div className="w-[293px] h-screen relative md:hidden">
        <div className="ml-6 py-4 fixed h-[370px] overflow-y-auto">
          {menus.map((menu, index) => (
            <ul key={index} className="">
              <li className="smallSidebar flex items-center  justify-between">
                <Link
                  onClick={() => setShowSidebar(!showSidebar)}
                  to={menu.link}
                  className="w-full flex items-center gap-4"
                >
                  <span>{menu.emoji}</span>{" "}
                  <div className="w-full flex items-center justify-between">
                    <span className="text-sm text-grayMenu leading-[22px]">
                      {menu.label}
                    </span>
                    <span>{menu.re_icon && <menu.re_icon />}</span>{" "}
                    {/* Render the icon if it exists */}
                  </div>
                </Link>
                {menu.submenus && (
                  <span onClick={() => toggleMenu(index)}>
                    {openMenuIndex === index ? (
                      <MdKeyboardArrowDown className="w-[18px] h-[18px] text-blueActive" />
                    ) : (
                      <MdKeyboardArrowRight className="w-[18px] h-[18px]" />
                    )}
                  </span>
                )}
              </li>
              {openMenuIndex === index && (
                <div className="ml-2 mt-1 mb-2">
                  <div className="border-l">
                    <ul className="pl-2">
                      {menu.submenus.map((submenu, subIndex) => (
                        <Link
                          onClick={() => setShowSidebar(!showSidebar)}
                          to={submenu.link}
                          key={subIndex}
                          className=" gap-3 w-[228px] h-8 flex items-center  px-2 text-gray-800 hover:bg-gray-200 "
                        >
                          <span> {submenu.img}</span>

                          <div className="w-full flex items-center justify-between">
                            <span>{submenu.label}</span>
                            <span className=" text-xl">{submenu.icon}</span>
                          </div>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </ul>
          ))}
        </div>
        {fixedPart.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className=" absolute left-0 bottom-[60px] w-[293px] h-[60px] px-4 pb-4 mb-4 cursor-pointer md:hidden"
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

export default SmallSidebar;
