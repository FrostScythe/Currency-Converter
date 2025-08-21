function Dropdown({ title }) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        {title}
      </label>
      <div className="relative">
        <select
          className="w-full appearance-none p-3 rounded-xl border border-gray-300 
                     bg-white text-gray-700 shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-indigo-300 
                     focus:border-indigo-500 transition cursor-pointer"
        >
          <option value="">Select {title}</option>
          <option value="usd">USD - US Dollar</option>
          <option value="inr">INR - Indian Rupee</option>
          <option value="eur">EUR - Euro</option>
          <option value="jpy">JPY - Japanese Yen</option>
        </select>

        {/* Custom dropdown arrow */}
        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
          ▼
        </span>
      </div>
    </div>
  );
}

export default Dropdown;
