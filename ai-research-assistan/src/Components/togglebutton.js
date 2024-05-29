import React from 'react';

const ToggleButton = ({ toggleSidebar }) => {
  return (
    <button 
      onClick={toggleSidebar}
      className="fixed top-4 left-4 bg-blue-500 text-white p-2 rounded"
    >
      Toggle Sidebar
    </button>
  );
};

export default ToggleButton;
