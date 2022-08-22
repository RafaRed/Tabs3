import React from "react";

function Popup(props: { isHidden: boolean, setIsHidden: Function, action:any, setField?:any}) {
	var hiddenTag = props.isHidden ? "hidden" : ""
	console.log("hidden tag: "+hiddenTag)
	return (
		<div
			className={["relative z-10",hiddenTag].join(" ")}
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true">
			<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

			<div className="fixed z-10 inset-0 overflow-y-auto">
				<div className="flex items-center sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
					<div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="flex items-center gap-3">
									<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
											/>
										</svg>
									</div>
									<h3
										className="text-lg leading-6 font-medium text-gray-900"
										id="modal-title">
										Create new category
									</h3>
								</div>
							</div>
							<div className="mt-5">
								<p className="text-md text-black">Name</p>
								<form className="w-full max-w-sm">
									<div className="flex items-center border-b border-black py-2">
										<input
											className="appearance-none bg-transparent border-none w-full text-gray-600 mr-3 mt-2 leading-tight focus:outline-none"
											type="text"
											placeholder="Rock"
											aria-label="Full name"
											onChange={(e)=>props.setField(e.target.value.toString())}
										/>
									</div>
								</form>
							</div>
						</div>
						<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
							<button
								type="button"
								className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E59953] text-base font-medium text-white hover:bg-[#f39c4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
								onClick={props.action}>
									
								Create
							</button>
							<button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={()=>props.setIsHidden(true)}>Cancel</button>

							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Popup;
