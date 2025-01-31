import Navbar from "./components/Navbar";
import LeftNavbar from "./components/LeftNav";
import MiddleCard from "./components/MiddleCard";

function App() {
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div>
				<LeftNavbar />
			</div>

			<div>
				<MiddleCard />
			</div>
			{/* <div className="flex flex-row gap-4 p-4">
				<div className="w-3/4">
					<MiddleCard />
				</div>
			</div> */}
		</>
	);
}

export default App;
