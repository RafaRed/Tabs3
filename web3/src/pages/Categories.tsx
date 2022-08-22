import React, { useState } from "react";
import { FloatButton } from "../components/FloatButton";
import { HollowButton } from "../components/HollowButton";
import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import { addCategory } from "../model/Calls";

function Categories() {
	const [isHidden,setIsHidden] = useState(true)
	const [category,setCategory] = useState("")
	return (
		<>
		
		<Navbar></Navbar>
		<Popup isHidden={isHidden} setIsHidden={setIsHidden} action={()=>createNewCategory(category)}></Popup>
		<div className="md:w-3/4 lg:w-4/6 xl:w-7/12">
			
			<div className="m-10">
				<p className="text-2xl ">Categories</p>
				<div className="flex flex-col gap-5 mt-10">
					<HollowButton name={"Rock"} link="/Rock/tracks"></HollowButton>
					<HollowButton name={"Pop"} ></HollowButton>
					<HollowButton name={"Jazz"}></HollowButton>
					<HollowButton name={"Easy Tracks"}></HollowButton>
				</div>
			</div>
			<FloatButton run={()=>setIsHidden(false)}></FloatButton>
		</div>
		
		</>
	);
}


function createNewCategory(category:string){
	var domain = localStorage.getItem("udlogin-domain");
	addCategory({"username":domain,"category":category}).then((response:any)=>{
		//window.location.href="/"+category
		console.log(response)
	})
}
export default Categories;