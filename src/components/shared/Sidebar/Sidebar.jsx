import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { TbHash } from "react-icons/tb";
import { Link } from "react-router-dom";
import { menus } from "../../../data/menuData";

const Sidebar = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <div className="w-[293px] h-full border-r ">
      <div className="ml-6 py-4  fixed h-screen   overflow-y-auto">
        {menus.slice(0, 1).map((menu, index) => (
          <ul key={index}>
            <li className="sidebar">
              <Link to={menu.link} className="w-full flex items-center gap-4">
                <span>{menu.emoji}</span>{" "}
                <span className="text-sm text-grayMenu leading-[22px]">
                  {menu.label}
                </span>
              </Link>
            </li>
          </ul>
        ))}
        {menus.slice(1, 2).map((menu, index) => (
          <ul key={index} className="">
            <li
              onClick={() => toggleMenu(index)}
              className="sidebar flex items-center  justify-between"
            >
              <Link to={menu.link} className="w-full flex items-center gap-4">
                <span>{menu.emoji}</span>{" "}
                <span className="text-sm text-grayMenu leading-[22px]">
                  {menu.label}
                </span>
              </Link>
              {menu.submenus && (
                <span>
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
                      <li key={subIndex} className="w-[228px] flex justify-between items-center text-gray-800 hover:bg-gray-200 px-2">
                        <a
                          href={submenu.link}
                          className="w-[210px] h-8 flex items-center"
                        >
                          {submenu.label}
                        </a>
                        <TbHash className="text-grayPrimary w-[18px] h-[18px]" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </ul>
        ))}
        {menus.slice(2, 3).map((menu, index) => (
          <ul key={index}>
            <li
              onClick={() => toggleMenu(index)}
              className="sidebar flex items-center  justify-between"
            >
              <Link to={menu.link} className="w-full flex items-center gap-4">
                <span>{menu.emoji}</span>{" "}
                <span className="text-sm text-grayMenu leading-[22px]">
                  {menu.label}
                </span>
              </Link>
              {menu.submenus && (
                <span>
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
                      <li key={subIndex}>
                        <a
                          href={submenu.link}
                          className="w-[228px] h-8 flex items-center  px-2 text-gray-800 hover:bg-gray-200"
                        >
                          {submenu.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </ul>
        ))}
        {menus.slice(3, 5).map((menu, index) => (
          <ul key={index} className="">
            <li className="sidebar flex items-center  justify-between">
              <Link to={menu.link} className="w-full flex items-center gap-4">
                <span>{menu.emoji}</span>{" "}
                <span className="text-sm text-grayMenu leading-[22px]">
                  {menu.label}
                </span>
              </Link>
            </li>
          </ul>
        ))}
        {menus.slice(5, 6).map((menu, index) => (
          <ul key={index} className="">
            <li
              onClick={() => toggleMenu(index)}
              className="sidebar flex items-center  justify-between"
            >
              <Link to={menu.link} className="w-full flex items-center gap-4">
                <span>{menu.emoji}</span>{" "}
                <span className="text-sm text-grayMenu leading-[22px]">
                  {menu.label}
                </span>
              </Link>
              {menu.submenus && (
                <span>
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
                      <li key={subIndex}>
                        <a
                          href={submenu.link}
                          className="w-[228px] h-8 flex items-center  px-2 text-gray-800 hover:bg-gray-200"
                        >
                          {submenu.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </ul>
        ))}
        {menus.slice(6, 7).map((menu, index) => (
          <ul key={index} className="">
            <li className="sidebar flex items-center  justify-between">
              <Link to={menu.link} className="w-full flex items-center gap-4">
                <span>{menu.emoji}</span>{" "}
                <span className="text-sm text-grayMenu leading-[22px]">
                  {menu.label}
                </span>
              </Link>
            </li>
          </ul>
        ))}
        {menus.slice(7).map((menu, index) => (
          <ul key={index} className="">
            <li className="sidebar flex items-center  justify-between">
              <Link to={menu.link} className="w-full flex items-center gap-4">
                <span>{menu.emoji}</span>{" "}
                <span className="text-sm text-grayMenu leading-[22px]">
                  {menu.label}
                </span>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
