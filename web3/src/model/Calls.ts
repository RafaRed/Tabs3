import { add_category_path, add_song_path, create_account_path, get_categories_path, get_songs_path, get_song_path, server } from "./repository";

export async function endpointCall(data:any, endpoint:string) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	};
	return new Promise((resolve, reject) => {
		fetch(server + endpoint, requestOptions)
			.then((response) => response.json())
			.then((data) => resolve(data));
	});
}

export async function createAccount(data:any) {
	return endpointCall(data, create_account_path)
}

export async function addCategory(data:any) {
	return endpointCall(data, add_category_path)
}

export async function addSong(data:any) {
	return endpointCall(data, add_song_path)
}

export async function getSong(data:any) {
	return endpointCall(data, get_song_path)
}

export async function getSongs(data:any) {
	return endpointCall(data, get_songs_path)
}

export async function getCategories(data:any) {
	return endpointCall(data, get_categories_path)
}