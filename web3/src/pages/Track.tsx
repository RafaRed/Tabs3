import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import Navbar from "../components/Navbar";
import { redirect } from "../controller/utils";
import { getSong } from "../model/Calls";
function Track() {
	let { song_id } = useParams();
	const [song, setSong] = useState({ name: "", images: "" });
	useEffect(() => {
		if (song_id !== undefined) {
			fetchSong(song_id, setSong);
		}
	}, []);
	return (
		<>
			<Navbar></Navbar>
			<div className="md:w-3/4 lg:w-4/6 xl:w-7/12">
				<div className=" mt-10 m-10">
					<div
						className="flex items-center gap-1 select-none cursor-pointer"
						onClick={() => redirect("tracks")}>
						<img src={arrow} className="h-3"></img>
						<p className="text-sm">Category</p>
					</div>

					<p className="text-2xl mt-10">{song.name}</p>
					<div className="flex flex-col gap-5 mt-10">
						<RenderImages song={song}></RenderImages>
					</div>
				</div>
			</div>
		</>
	);
}

function fetchSong(song_id: string, setSong: any) {
	getSong({ song_id: song_id }).then((result) => {
		setSong(result);
	});
}

function RenderImages(song: any): JSX.Element {
	var images: any = [];
	
	if (song !== undefined && song.song.images !== undefined) {
		console.log( song.song.images)
		for (var i = 0; i < song.song.images.length; i++) {
			console.log(song.song.images[i]);
			images.push(
				<div className="mt-2" key={i}>
					<img src={song.song.images[i].image} />
				</div>
			);
		}
	}

	return images;
}

export default Track;
