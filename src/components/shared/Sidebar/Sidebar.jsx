
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
      
      
      
       </ul>
     </div>
    </aside>
  );
};

export default Sidebar;