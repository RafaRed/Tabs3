import React, { useEffect, useState } from "react";
import { FloatButton } from "../components/FloatButton";
import { HollowButton } from "../components/HollowButton";
import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import { addCategory, getCategories } from "../model/Calls";

function Categories() {
	const [isHidden,setIsHidden] = useState(true)
	const [category,setCategory] = useState("")
	const [categories,setCategories] = useState()
	useEffect(()=>{fetchCategories(setCategories)},[])
	return (
		<>
		
		<Navbar></Navbar>
		<Popup isHidden={isHidden} setIsHidden={setIsHidden} action={()=>createNewCategory(category)} setField={setCategory}></Popup>
		<div className="md:w-3/4 lg:w-4/6 xl:w-7/12">
			
			<div className="m-10">
				<p className="text-2xl ">Categories</p>
				<div className="flex flex-col gap-5 mt-10">
					{renderCategories(categories)}
				</div>
			</div>
			<FloatButton run={()=>setIsHidden(false)}></FloatButton>
		</div>
		
		</>
	);
}


function createNewCategory(category:string){
	var domain = localStorage.getItem("udlogin-domain");
	console.log(category)
	addCategory({"username":domain,"category":category}).then((response:any)=>{
		window.location.href="/"+category+"/tracks"
		console.log(response)
	})
}

function fetchCategories(setCategories:any){
	var domain = localStorage.getItem("udlogin-domain");
	var categories:any = []
	getCategories({"username":domain}).then((result:any)=>{
		for (const [key, value] of Object.entries(result)) {
			categories.push({key:key,value:value})
		}
		setCategories(categories)
	})
}

function renderCategories(categories:any):JSX.Element{
	var categoryList:any = []
	if(categories !== undefined){
		for (let i = 0; i < categories.length; i++) {
			categoryList.push(<HollowButton name={categories[i].key} link={"/"+categories[i].value+"/tracks"}></HollowButton>)
		}
	}
	return categoryList
}

export default Categories;