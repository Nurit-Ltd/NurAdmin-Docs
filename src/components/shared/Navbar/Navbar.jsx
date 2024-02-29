import React from 'react';
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav className="h-[80px] px-2 bg-white flex items-center border-b-[1px] fixed top-0 left-0 right-0">
      <div className='w-full flex items-center justify-between'>
        {/* logo */}
        <div>
           <h3>TailAdmin Docs</h3>
        </div>
        <div className='w-[233px] h-9 flex items-center justify-between bg-gray-200 pl-6 pr-2'>
          <div className='flex items-center gap-2' >
          <BiSearch />
           <h5 className='text-sm text-grayHead leading-[22px]'>Search</h5>
          </div>
          <div className='flex items-center gap-1'>
             <span className='w-5 h-5 text-sm bg-white text-grayHead border-[1px] px-1'> 
               ^
              </span>   
             <span className='w-5 h-5 text-xs  bg-white text-grayHead border-[1px] px-1'> 
               K
              </span>   
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;