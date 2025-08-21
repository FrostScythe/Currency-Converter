import Button from "../components/button";
import Dropdown from "../components/dropdown";
import InputBox from "../components/input";

function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        {/* Title Section */}
        <div className="text-center mb-6">
          <h1 className="font-extrabold text-2xl text-gray-800">Currency Calculator</h1>
          <p className="text-gray-500 text-sm">
            Convert instantly between different currencies.
          </p>
        </div>

        {/* Input & Dropdown Section */}
        <div className="space-y-4">
          <InputBox />
          <Dropdown title="From Currency" />
          <Dropdown title="To Currency" />
        </div>

        {/* Convert Button */}
        <div className="mt-6">
          <Button  children="Convert"/>
        </div>
      </div>
    </div>
  );
}

export default Home;