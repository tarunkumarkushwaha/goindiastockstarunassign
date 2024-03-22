import React from 'react'

const Navbar = ({ settoggle }) => {
    return (
        <>
            <div className='flex flex-row'>
                <h1 className="bg-gray-800 md:bg-gray-50 mx-28 font-bold md:inline-flex hidden text-xl text-white md:text-orange-700">Discussion Forum</h1>
                <button onClick={() => settoggle(true)} className="px-[10%] w-[50vw] md:mx-auto mx-0 bg-gray-800 md:bg-gray-50 md:hidden inline-flex font-bold text-xl text-orange-700">Discussion Forum</button>
                <h1 className="bg-gray-800 md:bg-gray-50 mx-28 font-bold md:inline-flex hidden text-xl text-white md:text-orange-700">Market Stories</h1>
                <button onClick={() => settoggle(false)} className="px-[10%] w-[50vw] bg-gray-800 md:bg-gray-50 md:hidden inline-flex font-bold text-xl text-orange-700">Market Stories</button>
            </div>
        </>
    )
}

export default Navbar