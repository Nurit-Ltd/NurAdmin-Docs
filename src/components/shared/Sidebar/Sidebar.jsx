import { useState } from "react";
import { Link } from "react-router-dom";
import { menus } from "../../../data/menuData";

const Sidebar = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <aside className="ml-6 w-[273px] border-r h-full">
      <div className="fixed overflow-y-auto">
        {menus.map((menu, index) => (
          <ul key={index} className="py-4">
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
        {/* <ul >
      
      <li className='sidebar'>
        <Link to="/installation " className="w-full flex items-center gap-4"><span>🚀</span> <span className='text-sm text-grayMenu leading-[22px]'>Installation</span></Link>
      </li>
      <li className='sidebar'>
        <Link to="/components" className="w-full flex items-center gap-4"><span>🥞</span> <span className='text-sm text-grayMenu leading-[22px]'>Components</span></Link>
      </li>
      <li className='sidebar'>
        <Link to="/customization" className="w-full flex items-center gap-4"><span>💅</span> <span className='text-sm text-grayMenu leading-[22px]'>Customization</span></Link>
      </li>
      <li className='sidebar'>
        <Link to="/credit-resources" className="w-full flex items-center gap-4"><span>✨</span> <span className='text-sm text-grayMenu leading-[22px]'>Credits and Resources</span></Link>
      </li>
      <li className='sidebar'>
        <Link to="/updateLog" className="w-full flex items-center gap-4"><span>☑️</span> <span className='text-sm text-grayMenu leading-[22px]'>Update Logs</span></Link>
      </li>
      <li className='sidebar'>
        <Link to="/use-full-links" className="w-full flex items-center gap-4"><span>🔗</span> <span className='text-sm text-grayMenu leading-[22px]'>Useful Links</span></Link>
      </li>
      <li className='sidebar'>
        <Link to="/back-to-main" className="w-full flex items-center gap-4"><span>🎯</span> <span className='text-sm text-grayMenu leading-[22px]'>Back to Main Site</span></Link>
      </li>
      
      
      
       </ul> */}
      </div>
    </aside>
  );
};

export default Sidebar;
