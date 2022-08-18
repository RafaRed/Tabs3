import React from "react";
import arrow from "../assets/arrow.svg";
import Navbar from "../components/Navbar";
import { redirect } from "../controller/utils";

function AddTrack() {
	return (
		<>
		<Navbar></Navbar>
		<div className="w-3/4 md:w-3/4 lg:w-4/6 xl:w-6/12 m-10 flex flex-col justify-center">
			<div className="flex items-center gap-1 select-none cursor-pointer" onClick={()=>redirect("tracks")}>
				<img src={arrow} className="h-3"></img>
				<p className="text-sm">Tracks</p>
			</div>
			<p className="text-2xl mt-10">Name</p>
			<div className="flex items-center border-b border-black py-2 mt-5">
				<input
					type="text"
					className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none"></input>
			</div>
			<div>
				<p className="text-2xl mt-10 mb-3">Images</p>
				<button className="bg-white border-2 text-black p-2 rounded-md">
					Add Image
				</button>
			</div>

			<button className="fixed bottom-10 w-1/4 sm:w-3/12 lg:w-2/12 xl:w-1/12 right-10 bg-[#E59953] text-white p-2 rounded-md">
				Save
			</button>
		</div>
		</>
	);
}

export default AddTrack;
