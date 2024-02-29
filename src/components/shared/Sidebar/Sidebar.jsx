
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 h-screen w-64 left-">
     <ul className="py-4">
      <li>
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
  );
};

export default Sidebar;