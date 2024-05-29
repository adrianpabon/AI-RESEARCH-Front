import React from 'react';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4">
        <h2 className="text-2xl">Menu</h2>
        <ul>
          <li className="mt-4">Item 1</li>
          <li className="mt-4">Item 2</li>
          <li className="mt-4">Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
