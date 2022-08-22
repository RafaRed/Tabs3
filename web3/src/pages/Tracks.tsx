import React, { useEffect, useState } from "react";
import { FloatButton } from "../components/FloatButton";
import { HollowButton } from "../components/HollowButton";
import arrow from "../assets/arrow.svg";
import { redirect } from "../controller/utils";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { getSongs } from "../model/Calls";

function Tracks() {
	let {category} = useParams()
	const [songs,setSongs] = useState()
	useEffect(()=>{fetchSongs(setSongs,category)},[])
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
				{renderSongs(songs,category!)}

				</div>
			</div>
			<FloatButton link="add-track"></FloatButton>
		</div>
		</>
	);
}


function fetchSongs(setSongs:any, category?:string){
	var songs:any = []
	getSongs({"category_id":category}).then((result:any)=>{
		for (const [key, value] of Object.entries(result['songs'])) {
			songs.push({"name":key,"id":value})
		}
		setSongs(songs)
		console.log(songs)
	})
}

function renderSongs(songs:any, category:string):JSX.Element{
	var songList:any = []
	if(songs !== undefined){
		for (let i = 0; i < songs.length; i++) {
			songList.push(<HollowButton name={songs[i].name} link={"/"+category+"/"+songs[i].id}></HollowButton>)
		}
	}
	return songList
}

export default Tracks;
