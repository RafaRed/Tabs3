import React from "react";
import arrow from "../assets/arrow.svg";
import Navbar from "../components/Navbar";
import { redirect } from "../controller/utils";
function Track() {
	return (
		<>
			<Navbar></Navbar>
			<div className="md:w-3/4 lg:w-4/6 xl:w-7/12">
				<div className=" mt-10 m-10">
					<div
						className="flex items-center gap-1 select-none cursor-pointer"
						onClick={() => redirect("tracks")}>
						<img src={arrow} className="h-3"></img>
						<p className="text-sm">Category Name</p>
					</div>

					<p className="text-2xl mt-10">Track Name</p>
					<div className="flex flex-col gap-5 mt-10"></div>
				</div>
			</div>
		</>
	);
}

export default Track;
