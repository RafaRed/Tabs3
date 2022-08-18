import React from "react";
import menu from "../assets/menu.svg";
import menu_black from "../assets/menu-black.svg";
import { redirect } from "../controller/utils";
export function HollowButton(props: { name: string, link?: string }) {
	return (
		<div className="border-linear border-2 rounded-xl p-2 pl-4 transition-all hover:border-black hover:bg-black hover:text-white flex justify-between items-center cursor-pointer" onClick={()=>redirect(props.link!)}>
			{props.name}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-4 w-4 group-hover:stroke-red-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
				/>
			</svg>
		</div>
	);
}


