
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='ml-6 w-[273px] border-r h-screen'>
      <div className="fixed overflow-y-auto">
     <ul className="py-4">
      <li className='w-[259px] h-8 px-2 mr-2 mb-1 flex items-center hover:bg-slate-100 duration-200'>
        <Link to="/" className="w-full flex items-center gap-4"><span>👋</span> <span className='text-sm text-grayMenu leading-[22px]'>Introduction</span></Link>
      </li>
      <li className='w-[259px] h-8 px-2 mr-2 mb-1 flex items-center hover:bg-slate-100 duration-200'>
        <Link to="/installation " className="w-full flex items-center gap-4"><span>🚀</span> <span className='text-sm text-grayMenu leading-[22px]'>Installation</span></Link>
      </li>
      <li className='w-[259px] h-8 px-2 mr-2 mb-1 flex items-center hover:bg-slate-100 duration-200'>
        <Link to="/" className="w-full flex items-center gap-4"><span>🥞</span> <span className='text-sm text-grayMenu leading-[22px]'>Components</span></Link>
      </li>
      
      
      
       </ul>
     </div>
    </aside>
  );
};

export default Sidebar;