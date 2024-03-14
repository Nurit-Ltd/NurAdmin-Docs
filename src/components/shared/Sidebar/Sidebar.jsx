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
    scrollToTop(); // Scroll to top when any menu item is clicked
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <div className="relative">
        <div className="w-[293px] h-[470px]  hidden md:block overflow-y-auto">
          <div className="ml-6 py-4  fixed  md:h-[360px] xl1:h-[380px] 2xl:h-[470px] overflow-y-auto">
            {menus.map((menu, index) => (
              <div key={index} className="">
                <Link
                  onClick={() => toggleMenu(index)}
                  to={menu.link}
                  className={`sidebar flex items-center justify-between gap-4 text-sm leading-[22px] ${
                    location.pathname === menu.link
                      ? "text-blueActive bg-activeBg font-bold"
                      : "text-grayMenu hover:bg-hoverBg duration-200"
                  }`}
                >
                  <div className="w-full flex items-center gap-3 ">
                    <span>{menu.emoji}</span>
                    <div className="w-full flex items-center justify-between">
                      <span>{menu.label}</span>
                      <span>{menu.re_icon && <menu.re_icon />}</span> {/* Render the icon if it exists */}
                    </div>
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
                {menu.submenus &&
                  menu.submenus.length > 0 &&
                  openMenuIndex === index && (
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
                              onClick={scrollToTop} // Scroll to top when any submenu item is clicked
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
              </div>
            ))}
          </div>
        </div>
        
       
        {fixedPart.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="fixed bottom-0 w-[293px] h-[60px] px-4 pb-4 mb-4  cursor-pointer hidden md:block"
          >
            <div className="w-full h-[60px] bg-grayFix p-4 flex items-center gap-4">
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
