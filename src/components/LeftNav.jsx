import React from "react";

const LeftNav = () => {
	return (
		<div className="fixed top-15 left-0 w-64 h-screen bg-white flex flex-col justify-between p-5 shadow-md select-none">
			<div className="text-8xl font-bold text-black flex items-center">💬</div>
			<div className="flex flex-col gap-2">
				<div className="text-xl text-black flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-100">
					<span>👨🏻‍💻</span> Profile
				</div>
				<div className="text-xl text-black flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-100">
					<span>📋</span> Forum
				</div>
				<div className="text-xl text-black flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-100">
					<span>💼</span> Jobs
				</div>
				<div className="text-xl text-black flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-100">
					<span>📚</span> Courses
				</div>
				<div className="text-xl text-black flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-100">
					<span>📶</span> Analytics
				</div>
			</div>
			<div className="text-xl text-gray-800 flex items-center gap-2 cursor-pointer py-16 hover:bg-gray-100">
				<span>☰</span> Optimization
			</div>
		</div>
	);
};

export default LeftNav;
