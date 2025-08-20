import Dropdown from "../components/dropdown";
import InputBox from "../components/input";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1>Currency Calculator</h1>
        <p>Use this tool to convert between different currencies.</p>
      </div>
      <InputBox />
      <Dropdown />
    </div>
  );
}

export default Home;
