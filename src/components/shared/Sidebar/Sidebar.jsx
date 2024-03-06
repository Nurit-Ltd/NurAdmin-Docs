import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
// import { TbHash } from "react-icons/tb";
import { Link } from "react-router-dom";
import { menus } from "../../../data/menuData";

const Sidebar = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-[293px] h-full border-r hidden md:block">
      <div className="ml-6 py-4  fixed h-screen   overflow-y-auto">
        {menus.map((menu, index) => (
          <ul key={index} className="">
            <li className="sidebar flex items-center  justify-between">
              <Link to={menu.link} className="w-full flex items-center gap-4">
                <span>{menu.emoji}</span>{" "}
                <span className="text-sm text-grayMenu leading-[22px]">
                  {menu.label}
                </span>
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
                        to={submenu.link}
                        key={subIndex}
                        className=" gap-3 w-[228px] h-8 flex items-center  px-2 text-gray-800 hover:bg-gray-200 "
                      >
                        <span> {submenu.img}</span>

                        <span>{submenu.label}</span>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
