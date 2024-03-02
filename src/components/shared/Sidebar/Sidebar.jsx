import { useState } from "react";
import { Link } from "react-router-dom";
import { menus } from "../../../data/menuData";

const Sidebar = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <aside className="ml-6 w-[273px] ">
      <div className="fixed overflow-y-auto py-4 h-full border-r">
        {menus.map((menu, index) => (
          <ul key={index} className="">
            <li onClick={() => toggleMenu(index)} className="sidebar">
              <Link to={menu.link} className="w-full flex items-center gap-4">
                <span>{menu.emoji}</span>{" "}
                <span className="text-sm text-grayMenu leading-[22px]">
                  {menu.label}
                </span>
              </Link>
            </li>
            {openMenuIndex === index && (
              <div className=" bg-white rounded-lg shadow-lg">
                <ul className="py-2">
                  {menu.submenus.map((submenu, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={submenu.link}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        {submenu.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </ul>
           
        ))}
        
      </div>
    </aside>
  );
};

export default Sidebar;
