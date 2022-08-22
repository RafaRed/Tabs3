import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import Navbar from "../components/Navbar";
import { redirect } from "../controller/utils";
import { addSong } from "../model/Calls";
import { getBase64 } from "../utils/utils";

function AddTrack() {
	let {category} = useParams()
	const [name, setName] = useState("");
	const [images, setImages] = useState([]);
	const fileInput = useRef<HTMLInputElement>(null);
	const [files, setFiles] = useState([]);
	const selectFile = () => {
		if (fileInput.current !== null) {
			fileInput.current.click();
		}
	};
	return (
		<>
			<Navbar></Navbar>
			<div className="w-3/4 md:w-3/4 lg:w-4/6 xl:w-6/12 m-10 flex flex-col justify-center">
				<div
					className="flex items-center gap-1 select-none cursor-pointer"
					onClick={() => redirect("tracks")}>
					<img src={arrow} className="h-3"></img>
					<p className="text-sm">Tracks</p>
				</div>
				<p className="text-2xl mt-10">Name</p>
				<div className="flex items-center border-b border-black py-2 mt-5">
					<input
						type="text"
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
						onChange={(e) => setName(e.target.value)}></input>
				</div>
				<div>
					<p className="text-2xl mt-10 mb-3">Images</p>
					<button className="bg-white border-2 text-black p-2 rounded-md" onClick={selectFile}>
						Add Image
					</button>
					<input
						ref={fileInput}
						onChange={(e) => addImage(e, files, setFiles)}
						type="file"
						style={{ display: "none" }}
					/>
					<RenderFiles files={files}></RenderFiles>
				</div>

				<button className="fixed bottom-10 w-1/4 sm:w-3/12 lg:w-2/12 xl:w-1/12 right-10 bg-[#E59953] text-white p-2 rounded-md" onClick={()=>sendSong(files,name,category!)}>
					Save
				</button>
			</div>
		</>
	);
}

async function addImage(e: any, files: any, setFiles: any) {
	const file = e.target.files[0];
	if (file.type === "image/jpeg" || file.type === "image/png") {
		const temp_state = [...files];
		temp_state.push({"name":file.name,"image":await getBase64(file)});
		setFiles(temp_state);
	}
}

function RenderFiles(files:any) : JSX.Element{
	var images:any = [];
	for (var i = 0; i < files.files.length; i++) {
		images.push(
			<div className="mt-2" key={i}>
				<img src={files.files[i].image}/>
			</div>
		);
	}
	return images;
}

function sendSong(files:any,name:string, category:string){
	var domain = localStorage.getItem("udlogin-domain");
	addSong({"username":domain,"categoryid":category,"song":name,"imgs":files}).then(result=>{
		console.log(result)
		window.location.href = "/categories"
	})

}




export default AddTrack;
