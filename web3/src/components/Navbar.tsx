import { useWeb3React } from '@web3-react/core';
import React from 'react'
import imglogout from "../assets/logout.png";
import { injected, uauth, uauth2 } from '../controller/UDLogin/connectors';
function Navbar() {
    var domain = localStorage.getItem("udlogin-domain");
    if(domain == null){
        window.location.href = "/"
    }
	const { activate, deactivate } = useWeb3React();
    return (
        <div className='bg-black p-5 flex items-center justify-between select-none '>
            <p className='text-white ml-2 cursor-pointer' onClick={()=>window.location.href="/categories"}>TABS3</p>
            <div className='bg-white w-4/12 sm:w-3/12 md:w-2/12 xl:w-1/12 h-7 rounded-lg flex items-center justify-center gap-1 cursor-pointer'  onClick={()=>logout(deactivate)}>
                <p className='text-black'>{domain}</p>
                <img src={imglogout}></img>
            </div>
        </div>
    )
}

function logout(deactivate:any){

	uauth2.uauth.logout();
	deactivate();
	injected.deactivate();
	uauth.deactivate();
	localStorage.clear();
	window.location.href = "/";
}
export default Navbar