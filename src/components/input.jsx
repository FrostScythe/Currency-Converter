import { useState } from "react";

function InputBox() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        Amount
      </label>
      <div className="relative">
        {/* Currency Icon / Prefix */}
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-sm">
          $
        </span>

        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter amount"
          className="w-full pl-8 pr-3 py-2 rounded-xl border border-gray-300 
                     focus:outline-none focus:ring-2 focus:ring-indigo-300 
                     focus:border-indigo-500 shadow-sm transition"
        />
      </div>
    </div>
  );
}

export default InputBox;