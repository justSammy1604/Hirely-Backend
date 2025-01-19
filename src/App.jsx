// Navbar Component
function Navbar() {
	return (
		<nav className="bg-blue-500 text-white py-4 text-center text-xl font-bold">
			<h1>Hirely</h1>
		</nav>
	);
}

// Left Pane Card Component
function LeftPaneCard() {
	return (
		<div className="bg-gray-100 p-4 rounded-lg shadow-md">
			<h3 className="text-lg font-semibold mb-4">Menu</h3>
			<ul className="space-y-2">
				<li className="hover:text-blue-500 cursor-pointer">Dashboard</li>
				<li className="hover:text-blue-500 cursor-pointer">Settings</li>
				<li className="hover:text-blue-500 cursor-pointer">Profile</li>
				<li className="hover:text-blue-500 cursor-pointer">Logout</li>
			</ul>
		</div>
	);
}

// Middle Card Component
function MiddleCard() {
	return (
		<div className="bg-amber-500 p-6 shadow-md">
			<div className="flex justify-start gap-x-12">
				<div className="bg-white p-6 rounded-lg shadow-md">
					Springboot Course
				</div>
				<div className="bg-white p-6 rounded-lg shadow-md">
					Upcoming Projects
				</div>
			</div>
			<div className="mt-8">
				<h3 className="mb-4">Tracking Company 1</h3>
				<div className="bg-white p-6 rounded-lg shadow-md size-1/2">
					<h3 className="mb-2 -mt-4">Active</h3>
					<div className="flex justify-center -mb-4">
						<button className="border border-slate-950 rounded-full py-0.5 px-5 text-sm text-center">
							View
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

// App Component
function App() {
	return (
		<div className="font-sans">
			<Navbar />
			<div className="flex flex-row gap-4 p-4">
				<div className="w-1/4">
					<LeftPaneCard />
				</div>
				<div className="w-3/4">
					<MiddleCard />
				</div>
			</div>
		</div>
	);
}

export default App;
