import { useState } from "react";
import music from "../assets/music.svg"
import login from "../assets/login.png"
import UDLogin from "../components/UDLogin"
function App() {
	return (
		<div className="App">
			<div className="flex items-center flex-col h-screen justify-center gap-20">
				<div className="flex flex-col w-8/12 md:w-7/12 lg:w-6/12 h-5/6 justify-around">
					<Welcome></Welcome>
					<LoginFrame></LoginFrame>
				</div>
			</div>
		</div>
	);
}

function Welcome() {
	return (
		<div className="flex justify-between">
			<div className="max-w-md sm:max-w-sm">
				<h1 className="text-4xl sm:text-6xl md:text-6xl font-title font-black text-gray-800">
					WELCOME TO TABS3
				</h1>
				<p className="mt-8 text-sm sm:text-lg md:text-1xl pr-2">
					An easy way to organize and access your tabs, adding as many categories and
					tracks as you want.
				</p>
			</div>
			<img src={music} className="h-46 sm:h-56 md:h-64"></img>
		</div>
	);
}

function LoginFrame() {
	return (
		<div className="border-linear border-2 rounded-xl flex flex-col items-center justify-center w-full p- h-2/5">
			<p className="mb-2">LOGIN</p>
			<div className="w-9/12 border-b border-gray-300"></div>
			<p className="mt-8 mb-1 text-gray-400">Sign and start using it</p>
			<div className="flex items-center justify-center mt-2"><UDLogin></UDLogin></div>
		</div>
	);
}

export default App;
