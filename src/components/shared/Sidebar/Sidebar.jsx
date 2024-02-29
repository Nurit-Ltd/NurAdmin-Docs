
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='w-[300px] bg-gray-900 h-screen'>
      <div className="fixed overflow-y-auto">
     <ul className="py-4">
      <li>
      👋
        <Link to="/" className="block text-white py-2 px-4">Home</Link>
      </li>
      <li>
        <Link to="/componentPage" className="block text-white py-2 px-4">ComponentPage</Link>
      </li>
      <li>
        <Link to="/settings" className="block text-white py-2 px-4">Settings</Link>
      </li>
      {/* Add more sidebar links here */}
       </ul>
     </div>
    </aside>
  );
};

export default Sidebar;