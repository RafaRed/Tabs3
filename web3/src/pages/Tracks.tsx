import React from "react";
import { FloatButton } from "../components/FloatButton";
import { HollowButton } from "../components/HollowButton";
import arrow from "../assets/arrow.svg";
import { redirect } from "../controller/utils";
import Navbar from "../components/Navbar";

function Tracks() {
	return (
		<>
		<Navbar></Navbar>
		<div className="md:w-3/4 lg:w-4/6 xl:w-7/12">
			<div className=" mt-10 m-10">
				<div className="flex items-center gap-1 select-none cursor-pointer" onClick={()=>redirect("/categories")}>
					<img src={arrow} className="h-3"></img>
					<p className="text-sm">Categories</p>
				</div>

				<p className="text-2xl mt-10">Tracks</p>
				<div className="flex flex-col gap-5 mt-10">
					<HollowButton name={"Epitáfio"} link="Epitáfio"></HollowButton>
					<HollowButton name={"Como Uma Onda"}></HollowButton>
					<HollowButton name={"Como Nossos Pais"}></HollowButton>
					<HollowButton name={"País Tropical"}></HollowButton>
				</div>
			</div>
			<FloatButton link="add-track"></FloatButton>
		</div>
		</>
	);
}

export default Tracks;
