import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 h-[80px] p-4 fixed top-0 left-0 right-0">
      <div className="container mx-auto">
        <h1 className="text-white text-lg">Admin Dashboard</h1>
      </div>
    </nav>
  );
};

export default Navbar;