import { ChartCandlestick } from "lucide-react";

function Nav() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo + Title */}
      <div className="flex items-center gap-2">
        <ChartCandlestick className="text-blue-600" strokeWidth={2.25} size={28} />
        <h1 className="text-xl font-bold text-gray-800">Currency Calculator</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-blue-500 transition">Home</li>
        <li className="cursor-pointer hover:text-blue-500 transition">About</li>
        <li className="cursor-pointer hover:text-blue-500 transition">Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;