const MiddleCard = () => {
	return (
		<div className="bg-amber-500 p-6 shadow-md ml-64">
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
};

export default MiddleCard;
