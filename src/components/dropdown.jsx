import React from "react";

function Dropdown() {
  return (
    <div className="p-6">
      <label className="block text-gray-700 font-medium mb-2">
        Choose an option
      </label>
      <select
        className="w-64 p-3 rounded-lg border border-gray-300
                   text-gray-700 focus:outline-none 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                   transition cursor-pointer"
      >
        <option value="">Select an option</option>
        <option value="1">USD</option>
        <option value="2">INR</option>
        <option value="3">IDK</option>
      </select>
    </div>
  );
}

export default Dropdown;
